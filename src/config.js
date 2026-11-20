/**
 * Site content & settings.
 * ---------------------------------------------------------------
 * Everything on the page is driven from this file. Edit the values
 * below and refresh. No build step required.
 */
window.SITE_CONFIG = {
  // ---- Links ---------------------------------------------------
  // Paste your Discord invite here; it updates every Discord button.
  discordUrl: "https://discord.gg/YOUR-INVITE-CODE",

  // Optional: registration form link. Leave "" to hide the button.
  registerUrl: "",

  // ---- Event basics --------------------------------------------
  event: {
    name: "ECE Hardware Hackathon",
    shortName: "ECE/HACK",
    year: 2027,
    dates: "April 2027",            // e.g. "April 10–11, 2027"
    location: "ECE Building, UIUC",
    city: "Urbana-Champaign",
    cost: "Free",
    headline: ["Build something", "real."], // second part is highlighted
    tagline:
      "A weekend hardware hackathon hosted by the ECE student organizations at UIUC. " +
      "Grab a team, pick some parts, and ship a working prototype: circuits, sensors, " +
      "microcontrollers, robots, and anything else you can solder together.",
  },

  // ---- About ---------------------------------------------------
  about: {
    title: "Hardware, start to finish, in one weekend.",
    body:
      "Software hackathons are everywhere. This one is about things you can hold. " +
      "We provide the lab space, tools, components, and mentors. You bring the ideas. " +
      "No prior hardware experience is needed: first-timers are welcome and we'll run " +
      "beginner workshops on day one.",
    features: [
      { icon: "⚡", title: "Parts provided", text: "Microcontrollers, dev boards, sensors, motors, and passives, free to use while you build." },
      { icon: "🔧", title: "Real lab tools", text: "Soldering stations, oscilloscopes, power supplies, and 3D printers." },
      { icon: "🧑‍🔬", title: "Mentors on call", text: "Upperclassmen, grad students, and industry engineers to help you debug." },
      { icon: "🏆", title: "Prizes", text: "Awards for the top projects overall and for each track." },
    ],
    stats: [
      { value: "24h", label: "of building" },
      { value: "1–4", label: "people per team" },
      { value: "$0", label: "to participate" },
    ],
  },

  // ---- Tracks --------------------------------------------------
  tracks: [
    { title: "Embedded & IoT", text: "Connected devices, sensor networks, and low-power systems." },
    { title: "Robotics", text: "Things that move, sense, and make decisions on their own." },
    { title: "Assistive Tech", text: "Hardware that improves accessibility, health, or daily life." },
    { title: "Wildcard", text: "Music synths, art installs, weird gadgets. Surprise the judges." },
  ],

  // ---- Schedule ------------------------------------------------
  scheduleNote: "Tentative. Exact dates and times will be announced in the Discord.",
  schedule: [
    {
      day: "Saturday",
      items: [
        ["9:00 AM", "Check-in & breakfast"],
        ["10:00 AM", "Opening ceremony & team formation"],
        ["11:00 AM", "Hacking begins · parts checkout opens"],
        ["1:00 PM", "Beginner workshops: soldering, Arduino, sensors"],
        ["7:00 PM", "Dinner"],
      ],
    },
    {
      day: "Sunday",
      items: [
        ["12:00 AM", "Midnight snack"],
        ["8:00 AM", "Breakfast"],
        ["11:00 AM", "Hacking ends · submissions due"],
        ["12:00 PM", "Demos & judging"],
        ["3:00 PM", "Awards & closing"],
      ],
    },
  ],

  // ---- FAQ -----------------------------------------------------
  faq: [
    ["Who can participate?", "Any UIUC student, from any major and any year. You don't need to be in ECE."],
    ["I've never done hardware before. Can I still come?", "Yes. We'll run beginner workshops and have mentors around the whole time. Plenty of teams are first-timers."],
    ["Do I need a team?", "No. Teams are 1–4 people, and we'll help you find one during team formation or in the Discord beforehand."],
    ["What should I bring?", "A laptop, charger, student ID, and anything you need to sleep comfortably. You're also welcome to bring your own parts."],
    ["Do I get to keep what I build?", "Consumables like wire and passives are yours. Dev boards and tools from the lending library need to be returned at the end."],
    ["How do I register?", "Registration opens in early spring. Join the Discord to be notified as soon as it goes live."],
  ],

  // ---- Hosts ---------------------------------------------------
  // Replace with the actual hosting RSOs. `url` is optional.
  hosts: [
    { name: "RSO Name 1", url: "" },
    { name: "RSO Name 2", url: "" },
    { name: "RSO Name 3", url: "" },
    { name: "RSO Name 4", url: "" },
  ],
};
