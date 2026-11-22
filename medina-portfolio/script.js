// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Mobile menu ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---------- Active link on scroll ----------
const sections = document.querySelectorAll("main section[id]");
const links = navLinks.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
  });
  links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
});

// ---------- Profile photo fallback ----------
const photo = document.getElementById("profilePhoto");
photo.addEventListener("error", () => (photo.style.display = "none"));

// ---------- Skills carousel ----------
const track = document.getElementById("track");
const slides = track.children;
const dotsBox = document.getElementById("dots");
let index = 0;
let timer;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", "Go to skill " + (i + 1));
  dot.addEventListener("click", () => { goTo(i); restart(); });
  dotsBox.appendChild(dot);
}

function goTo(i) {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  [...dotsBox.children].forEach((d, n) => d.classList.toggle("active", n === index));
}
function restart() {
  clearInterval(timer);
  timer = setInterval(() => goTo(index + 1), 4000);
}

document.getElementById("prevBtn").addEventListener("click", () => { goTo(index - 1); restart(); });
document.getElementById("nextBtn").addEventListener("click", () => { goTo(index + 1); restart(); });
goTo(0);
restart();

// ---------- Contact form validation ----------
const form = document.getElementById("contactForm");
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message"),
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(field, msg) {
  document.getElementById(field.id + "Error").textContent = msg;
  field.classList.toggle("invalid", Boolean(msg));
}

function validate() {
  let ok = true;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const message = fields.message.value.trim();

  if (!name) { setError(fields.name, "Please enter your name."); ok = false; }
  else setError(fields.name, "");

  if (!email) { setError(fields.email, "Please enter your email."); ok = false; }
  else if (!emailPattern.test(email)) { setError(fields.email, "Please enter a valid email address."); ok = false; }
  else setError(fields.email, "");

  if (!message) { setError(fields.message, "Please write a message."); ok = false; }
  else setError(fields.message, "");

  return ok;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.hidden = true;
  if (validate()) {
    success.hidden = false;
    form.reset();
  }
});

Object.values(fields).forEach((f) => f.addEventListener("input", () => setError(f, "")));
