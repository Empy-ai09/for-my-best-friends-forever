// ====== KONFIGURASI ======
// Ganti URL galeri di sini:
const GALLERY_URL = "https://example.com/galeri-nadya";

document.addEventListener("DOMContentLoaded", () => {
  // Set gallery link
  const galleryBtn = document.getElementById("galleryBtn");
  if (galleryBtn) galleryBtn.href = GALLERY_URL;

  // Generate particles
  const particles = document.getElementById("particles");
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.className = "bd-particle";
    s.style.left = `${(i * 53) % 100}%`;
    s.style.animationDelay = `${(i % 6) * 0.3}s`;
    s.style.fontSize = `${0.7 + (i % 4) * 0.25}rem`;
    s.textContent = i % 2 ? "✨" : "💗";
    particles.appendChild(s);
  }

  const stageGift = document.getElementById("stage-gift");
  const stageTitle = document.getElementById("stage-title");
  const titleEl = document.getElementById("titleEl");
  const dim = document.getElementById("dim");
  const letterWrap = document.getElementById("letterWrap");
  const giftBtn = document.getElementById("giftBtn");

  let opened = false;
  giftBtn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    // Stage: dim
    dim.classList.add("is-on");
    stageGift.classList.remove("is-active");
    stageGift.classList.add("is-hidden");

    // Stage: title
    setTimeout(() => {
      stageTitle.classList.remove("is-hidden");
      stageTitle.classList.add("is-active");
      titleEl.classList.add("bd-title-in");
    }, 1100);

    // Stage: slide letter in
    setTimeout(() => {
      letterWrap.classList.remove("is-pre");
      letterWrap.classList.add("is-sliding");
    }, 4200);

    setTimeout(() => {
      letterWrap.classList.remove("is-sliding");
      letterWrap.classList.add("is-in");
      // Hide dim+title after letter is in
      dim.classList.remove("is-on");
      stageTitle.classList.remove("is-active");
      stageTitle.classList.add("is-hidden");

      // Reveal paragraphs
      const paras = document.querySelectorAll("#letterBody .bd-para, #letterBody .bd-sign");
      paras.forEach((p, i) => {
        setTimeout(() => p.classList.add("is-in"), 600 + i * 1100);
      });
    }, 5300);
  });

  // Envelope
  const envBtn = document.getElementById("envelopeBtn");
  const secret = document.getElementById("secret");
  const envHint = document.getElementById("envHint");
  const hearts = document.getElementById("hearts");

  envBtn.addEventListener("click", () => {
    if (envBtn.classList.contains("is-open")) return;
    envBtn.classList.add("is-open");
    envBtn.setAttribute("aria-expanded", "true");
    secret.classList.add("is-open");
    secret.setAttribute("aria-hidden", "false");
    if (envHint) envHint.style.display = "none";

    // Burst hearts
    for (let i = 0; i < 14; i++) {
      const h = document.createElement("span");
      h.className = "bd-heart";
      h.textContent = "♥";
      h.style.left = `${Math.random() * 100}%`;
      h.style.animationDelay = `${Math.random() * 0.6}s`;
      hearts.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }
  });
});