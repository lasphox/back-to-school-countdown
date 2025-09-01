const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const TARGET = new Date("2025-09-11T09:00:00");

function updateProgressBar() {
  const start = new Date("2024-09-11T09:00:00");
  const now = new Date();
  const total = TARGET - start;
  const current = Math.max(0, Math.min(TARGET - now, total));
  const percent = Math.round(100 * (1 - current / total));
  document.getElementById('progress-bar-inner').style.width = percent + "%";
  document.getElementById('progress-percentage').textContent = percent + "%";
}
updateProgressBar();

function animate(el, val) {
  if (el.textContent !== val) {
    el.textContent = val;
    el.classList.add('animate');
    el.addEventListener('animationend', () => el.classList.remove('animate'), { once: true });
  }
}

function update() {
  const now = new Date();
  let diff = TARGET - now;
  if (diff <= 0) {
    document.querySelector('main h1').innerHTML = `<span style="font-size:2.5rem;">Year Started`;
    updateProgressBar();
    return;
  }
  const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  animate(daysEl, d);
  animate(hoursEl, h);
  animate(minutesEl, m);

  if (secondsEl.textContent !== s) {
    secondsEl.textContent = s;
  }

  updateProgressBar();
}
setInterval(update, 1000);
update();