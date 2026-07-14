/**
 * Bundled demo content used when a Google Sheet is not configured
 * or unreachable. Keeps the UI fully populated for preview/demo.
 *
 * To use live data: set VITE_GOOGLE_SHEET_ID in .env and publish
 * the matching tabs (Couple, Events, Countdown, Gallery, Family,
 * Schedule, RSVP, Venue, Blessings) from your Google Sheet.
 */

export const fallbackData = {
  couple: [
    {
      name: "Aarav Sharma",
      role: "The Groom",
      bio: "Architect, coffee enthusiast, and the calm to her storm. Aarav believes the best spaces — like the best relationships — are built one honest brick at a time.",
      photo: "https://images.pexels.com/photos/2204170/pexels-photo-2204170.jpeg?auto=compress&cs=tinysrgb&w=900",
      parents: "Son of Mr. Rajesh & Mrs. Anjali Sharma",
    },
    {
      name: "Meera Iyer",
      role: "The Bride",
      bio: "Florist and lifelong romantic. Meera collects handwritten letters, vintage teacups, and sunrises. She says every bouquet tells a story — this one is ours.",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900",
      parents: "Daughter of Mr. Vikram & Mrs. Sunita Iyer",
    },
  ],

  events: [
    {
      title: "Haldi Ceremony",
      date: "December 12, 2026",
      time: "9:00 AM",
      location: "Courtyard Villa, Udaipur",
      description: "A morning of turmeric, laughter and blessings as family gathers to prepare the couple for the days ahead.",
      icon: "sun",
      image: "https://images.pexels.com/photos/2026444/pexels-photo-2026444.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Sangeet Night",
      date: "December 13, 2026",
      time: "7:30 PM",
      location: "Lakeside Pavilion, Udaipur",
      description: "An evening of music, choreographed dances and celebration under the stars with both families.",
      icon: "music",
      image: "https://images.pexels.com/photos/1763065/pexels-photo-1763065.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Vows & Vidaai",
      date: "December 14, 2026",
      time: "5:00 PM",
      location: "Garden Mandap, Udaipur",
      description: "The sacred ceremony around the holy fire, followed by the heartfelt vidaai as Meera begins a new chapter.",
      icon: "heart",
      image: "https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ],

  countdown: [
    { target: "2026-12-14T17:00:00", label: "The Vows" },
  ],

  gallery: [
    { image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "The first hello" },
    { image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Golden hour, golden company" },
    { image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Where it all began" },
    { image: "https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Promises in bloom" },
    { image: "https://images.pexels.com/photos/2026444/pexels-photo-2026444.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Morning light" },
    { image: "https://images.pexels.com/photos/1763065/pexels-photo-1763065.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Dance floor diaries" },
    { image: "https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Quiet moments" },
    { image: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Together, always" },
  ],

  family: [
    { name: "Rajesh Sharma", role: "Father of the Groom", photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "groom" },
    { name: "Anjali Sharma", role: "Mother of the Groom", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "groom" },
    { name: "Vikram Iyer", role: "Father of the Bride", photo: "https://images.pexels.com/photos/2204170/pexels-photo-2204170.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "bride" },
    { name: "Sunita Iyer", role: "Mother of the Bride", photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "bride" },
    { name: "Kabir Sharma", role: "Brother of the Groom", photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "groom" },
    { name: "Ananya Iyer", role: "Sister of the Bride", photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", relation: "bride" },
  ],

  schedule: [
    { time: "9:00 AM", title: "Haldi Begins", detail: "Courtyard Villa — turmeric paste ceremony with close family." },
    { time: "11:30 AM", title: "Mehndi Lounge", detail: "Open henna stations, live folk music and refreshments." },
    { time: "1:00 PM", title: "Family Lunch", detail: "A curated vegetarian thali on the terrace lawn." },
    { time: "7:30 PM", title: "Sangeet Performances", detail: "Choreographed family dances followed by a live band." },
    { time: "10:00 PM", title: "Dinner & Dessert", detail: "Live counters, dessert bar and a sparkler send-off." },
  ],

  rsvp: [
    { name: "RSVP Deadline", value: "November 30, 2026" },
    { name: "Contact", value: "rsvp@aaravmeera.love" },
    { name: "Phone", value: "+91 98765 43210" },
  ],

  venue: [
    {
      name: "The Lakeside Palace",
      address: "Lake Pichola, Udaipur, Rajasthan 313001",
      mapQuery: "Lake Pichola Udaipur",
      description: "A heritage lakeside venue framed by marble jharokhas and the Aravalli hills. The palace grounds host all three days of celebration.",
      image: "https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=1200",
      accommodations: [
        { hotel: "Taj Lake Palace", distance: "2 min by boat" },
        { hotel: "The Leela Palace", distance: "8 min drive" },
        { hotel: "Udai Vilas", distance: "12 min drive" },
      ],
    },
  ],

  blessings: [
    { name: "Grandmother Sharma", message: "May your home always be filled with laughter, light and the aroma of fresh chai.", photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Uncle Ramesh", message: "Two families, one beginning. Wishing you a lifetime of patience, partnership and joy.", photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Cousin Priya", message: "From childhood mischief to the mandap — couldn't have imagined a better pairing. Love you both!", photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Friend Karan", message: "Aarav finally found someone who laughs at his jokes. Meera, good luck — and congratulations!", photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ],
};
