import { fetchSheet } from "../services/googleSheets";
import { fallbackData } from "./fallbackData";

/**
 * Central data access layer.
 * Fetches content from a Google Sheet (CSV) and normalizes it into typed objects.
 * Falls back to bundled demo data when the sheet is not configured or unreachable,
 * so the UI always renders a complete, premium experience.
 */

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || "";
const COUPLE_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_COUPLE || "Couple";
const EVENTS_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_EVENTS || "Events";
const COUNTDOWN_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_COUNTDOWN || "Countdown";
const GALLERY_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_GALLERY || "Gallery";
const FAMILY_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_FAMILY || "Family";
const SCHEDULE_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_SCHEDULE || "Schedule";
const RSVP_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_RSVP || "RSVP";
const VENUE_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_VENUE || "Venue";
const BLESSINGS_TAB = import.meta.env.VITE_GOOGLE_SHEET_TAB_BLESSINGS || "Blessings";

function withFallback(rows, key) {
  if (!rows || rows.length === 0) return fallbackData[key];
  return rows;
}

export async function loadCouple() {
  const rows = await fetchSheet(SHEET_ID, COUPLE_TAB);
  return withFallback(rows, "couple");
}

export async function loadEvents() {
  const rows = await fetchSheet(SHEET_ID, EVENTS_TAB);
  return withFallback(rows, "events");
}

export async function loadCountdown() {
  const rows = await fetchSheet(SHEET_ID, COUNTDOWN_TAB);
  return withFallback(rows, "countdown");
}

export async function loadGallery() {
  const rows = await fetchSheet(SHEET_ID, GALLERY_TAB);
  return withFallback(rows, "gallery");
}

export async function loadFamily() {
  const rows = await fetchSheet(SHEET_ID, FAMILY_TAB);
  return withFallback(rows, "family");
}

export async function loadSchedule() {
  const rows = await fetchSheet(SHEET_ID, SCHEDULE_TAB);
  return withFallback(rows, "schedule");
}

export async function loadRSVP() {
  const rows = await fetchSheet(SHEET_ID, RSVP_TAB);
  return withFallback(rows, "rsvp");
}

export async function loadVenue() {
  const rows = await fetchSheet(SHEET_ID, VENUE_TAB);
  return withFallback(rows, "venue");
}

export async function loadBlessings() {
  const rows = await fetchSheet(SHEET_ID, BLESSINGS_TAB);
  return withFallback(rows, "blessings");
}

export async function loadAll() {
  const [
    couple,
    events,
    countdown,
    gallery,
    family,
    schedule,
    rsvp,
    venue,
    blessings,
  ] = await Promise.all([
    loadCouple(),
    loadEvents(),
    loadCountdown(),
    loadGallery(),
    loadFamily(),
    loadSchedule(),
    loadRSVP(),
    loadVenue(),
    loadBlessings(),
  ]);
  return { couple, events, countdown, gallery, family, schedule, rsvp, venue, blessings };
}
