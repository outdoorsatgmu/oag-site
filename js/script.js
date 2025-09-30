// ====== SUPER TINY POC ======
// For now, events come from a small JS array.
// (Later can be swapped to a Google Sheet fetch.)
const EVENTS = [
  { title: "Sunrise Hike - Great Falls", date:"2025-09-14", time:"6:00–8:30 AM", location:"Great Falls Park VA", rsvp:"#"},
  { title: "Shenandoah Day Hike - Little Stony Man", date:"2025-09-21", time:"9:00 AM–3:00 PM", location:"Shenandoah NP", rsvp:"#"},
];

const list = document.getElementById('eventsList');
if (!EVENTS.length) {
  list.textContent = "No upcoming events yet.";
} else {
  list.innerHTML = EVENTS.map(e => `
    <article class="event">
      <h3>${e.title}</h3>
      <div>${e.date} • ${e.time}</div>
      <div>${e.location}</div>
      <a class="btn" href="${e.rsvp}" target="_blank" rel="noopener">RSVP</a>
    </article>
  `).join("");
}

// ===== Optional: Sheet hookup later =====
// Replace the block above with this if you want live data:
/*
const SHEET_ID = "PASTE_SHEET_ID";
const SHEET_NAME = "Events";
const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;
fetch(URL).then(r=>r.text()).then(csv=>{
  const lines = csv.trim().split(/\r?\n/).slice(1); // skip header
  list.innerHTML = "";
  lines.forEach(line=>{
    const [publish,title,date,time,location,difficulty,rsvp] = line.split(",");
    if ((publish||"").trim().toLowerCase() !== "true") return;
    list.insertAdjacentHTML("beforeend", `
      <article class="event">
        <h3>${(title||"").trim()}</h3>
        <div>${(date||"").trim()} • ${(time||"").trim()}</div>
        <div>${(location||"").trim()}</div>
        <a class="btn" href="${(rsvp||"#").trim()}" target="_blank" rel="noopener">RSVP</a>
      </article>`);
  });
  if (!list.innerHTML) list.textContent = "No upcoming events yet.";
}).catch(()=>{
  list.textContent="Could not load events.";
});
*/
