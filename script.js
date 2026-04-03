const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const message = document.getElementById("message");
const stars = document.getElementById("stars");
const fireworks = document.getElementById("fireworks");

createStars();

openBtn.addEventListener("click", () => {
  intro.classList.add("hide");
  message.classList.remove("hidden");
  startFireworks();
});

function createStars() {
  for (let i = 0; i < 120; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = (Math.random() * 0.7 + 0.2).toFixed(2);
    stars.appendChild(star);
  }
}

let fireworksStarted = false;

function startFireworks() {
  if (fireworksStarted) return;
  fireworksStarted = true;

  setInterval(() => {
    createFirework(42 + Math.random() * 16, 14 + Math.random() * 12);
  }, 900);

  setInterval(() => {
    createFirework(28 + Math.random() * 44, 16 + Math.random() * 14);
  }, 1300);
}

function createFirework(xPercent, yPercent) {
  const fw = document.createElement("div");
  fw.className = "firework";
  fw.style.left = xPercent + "%";
  fw.style.top = yPercent + "%";

  const colors = ["#74f6ff", "#aafcff", "#ffd84a", "#ffffff", "#4de3ff"];

  for (let i = 0; i < 18; i++) {
    const spark = document.createElement("span");
    spark.style.setProperty("--angle", `${i * 20}deg`);
    const color = colors[Math.floor(Math.random() * colors.length)];
    spark.style.background = color;
    spark.style.boxShadow = `0 0 12px ${color}`;
    spark.style.animationDelay = `${Math.random() * 0.12}s`;
    fw.appendChild(spark);
  }

  fireworks.appendChild(fw);

  setTimeout(() => fw.remove(), 1400);
}