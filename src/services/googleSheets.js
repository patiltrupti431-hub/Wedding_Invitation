/**
 * Google Sheets fetcher.
 *
 * Reads a published Google Sheet via its CSV export endpoint.
 * No backend, no API key required — the sheet must be published
 * (File → Share → Publish to web → "Published CSV" for each tab).
 *
 * The fetcher parses CSV into an array of row objects keyed by the
 * header row, with light type coercion (numbers, booleans, trimmed strings).
 */

const CSV_BASE = "https://docs.google.com/spreadsheets/d";

function parseCSVLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

function parseCSV(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((l) => l.trim() !== "");
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0]).map((h) => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCSVLine(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      let val = (cells[idx] ?? "").trim();
      if (val === "") {
        obj[h] = "";
      } else if (!isNaN(Number(val)) && val !== "") {
        obj[h] = Number(val);
      } else if (val.toLowerCase() === "true" || val.toLowerCase() === "false") {
        obj[h] = val.toLowerCase() === "true";
      } else {
        obj[h] = val;
      }
    });
    rows.push(obj);
  }
  return rows;
}

export async function fetchSheet(sheetId, tabName) {
  if (!sheetId || !tabName) return [];
  const url = `${CSV_BASE}/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const text = await res.text();
    return parseCSV(text);
  } catch (err) {
    console.warn(`[googleSheets] Could not fetch tab "${tabName}":`, err);
    return [];
  }
}
