/* --- Simple static data for now --- */
const EVENTS = [
  {
    title: "Great Falls sunrise hike",
    date: "Sat, Sep 21",
    time: "6:15 AM",
    location: "Great Falls Park (VA)",
    rsvp: "https://forms.gle/your-rsvp-1"
  },
  {
    title: "Burke Lake nature walk",
    date: "Sun, Sep 29",
    time: "10:00 AM",
    location: "Burke Lake Park",
    rsvp: "https://forms.gle/your-rsvp-2"
  }
];

const list = document.getElementById("eventsList");

function render(events){
  if (!events || !events.length){
    list.innerHTML = `<p class="meta">No upcoming events yet.</p>`;
    return;
  }
  list.innerHTML = events.map(e => `
    <article class="event">
      <h3>${e.title}</h3>
      <div class="meta">${e.date} • ${e.time}</div>
      <div class="meta">${e.location}</div>
      <div class="spacer"></div>
      <a class="btn" href="${e.rsvp}" target="_blank" rel="noopener">RSVP</a>
    </article>
  `).join("");
}

render(EVENTS);

/* --- Optional: swap to Google Sheets later ---
   1) Put events in a Sheet with header:
      publish,title,date,time,location,rsvp
   2) File → Share → Anyone with link (viewer)
   3) Use the CSV "gviz" URL below
*/
// function loadFromSheet() {
//   const SHEET_ID = "PASTE_SHEET_ID";
//   const SHEET_NAME = "Events";
//   const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;
//   fetch(url)
//     .then(r => r.text())
//     .then(csv => {
//       const rows = csv.trim().split(/\r?\n/).slice(1);
//       const data = rows.map(line => {
//         const [publish,title,date,time,location,rsvp] = line.split(",");
//         return { publish, title, date, time, location, rsvp };
//       }).filter(x => (x.publish||"").toLowerCase().trim() === "true");
//       render(data);
//     })
//     .catch(() => { list.innerHTML = `<p class="meta">Could not load events.</p>`; });
// }
// loadFromSheet();
