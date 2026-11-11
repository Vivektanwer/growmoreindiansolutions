// ALL the editable website content lives in this one file.
// Change text here and it updates everywhere on the website.

export const site = {
  name: "Grow More Indian Solutions",
  url: "https://website.com", // <-- put your real domain here later
  phones: ["9540893256", "9818869969"],
  email: "indiangrowmore@gmail.com",
  address: "B-256, Khasra No. 16/24, Bharat Vihar, Near Shri Ram Properties, New Delhi-110086",

  // Paste your Google Apps Script "Web app URL" here (see google-apps-script/Code.gs)
  scriptUrl: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE",
}

// Social media links (replace "#" with your real page links)
export const socialLinks = [
  { name: "Facebook", icon: "bi-facebook", link: "#" },
  { name: "Instagram", icon: "bi-instagram", link: "#" },
  { name: "LinkedIn", icon: "bi-linkedin", link: "#" },
  { name: "YouTube", icon: "bi-youtube", link: "#" },
  { name: "WhatsApp", icon: "bi-whatsapp", link: "https://wa.me/919540893256" },
]

// Menu links. "id" is the id of the section on the page.
export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Reviews", id: "testimonials" },
  { label: "Contact", id: "contact" },
]

export const services = [
  {
    icon: "bi-trash3",
    title: "Bio-Medical Waste Polybags",
    text: "Strong, leak-proof colour-coded bags in yellow, red, blue and white for hospitals, clinics and labs.",
  },
  {
    icon: "bi-shield-plus",
    title: "Sharps Containers",
    text: "Puncture-resistant containers for safe disposal of needles, syringes, blades and other sharp waste.",
  },
  {
    icon: "bi-recycle",
    title: "Dustbins",
    text: "Pedal bins and waste bins in many sizes for hospitals, offices, schools, shops and homes.",
  },
  {
    icon: "bi-droplet-half",
    title: "Housekeeping Items",
    text: "Mops, brooms, wipers, gloves, cleaning liquids and everything else your cleaning staff needs.",
  },
  {
    icon: "bi-box-seam",
    title: "Bulk & Regular Supply",
    text: "Monthly or weekly supply plans so you never run out of stock. Special rates on bulk orders.",
  },
  {
    icon: "bi-sliders",
    title: "Custom Orders",
    text: "Need a special size, thickness or print on your bags? Tell us and we will arrange it.",
  },
]

export const whyChooseUs = [
  { icon: "bi-check2-circle", title: "Right Product, Every Time", text: "We help you pick the correct bag, bin or container for each type of waste." },
  { icon: "bi-tag", title: "Fair Prices", text: "Honest rates with better pricing when you order in bulk." },
  { icon: "bi-truck", title: "On-Time Delivery", text: "Quick delivery across Delhi NCR so your work never stops." },
  { icon: "bi-boxes", title: "One-Stop Supplier", text: "Waste bags, bins and housekeeping items from a single trusted source." },
  { icon: "bi-headset", title: "Friendly Support", text: "Call or WhatsApp us anytime in working hours. A real person will answer." },
  { icon: "bi-patch-check", title: "Quality Checked", text: "Every product is checked for strength and finish before it reaches you." },
]

// These are SAMPLE reviews. Replace them with real customer reviews.
export const testimonials = [
  {
    name: "Dr. R. Sharma",
    role: "Clinic Owner, Delhi",
    text: "Their bio-medical bags are strong and always delivered on time. We have been ordering every month without any problem.",
  },
  {
    name: "Neha Verma",
    role: "Administrator, Diagnostic Lab",
    text: "Good quality sharps containers and very fair rates. The team understood exactly what our lab needed.",
  },
  {
    name: "Amit Gupta",
    role: "Facility Manager",
    text: "One call and all our dustbins and housekeeping items were arranged. Very easy to work with.",
  },
]
