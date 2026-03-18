document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.onclick = () => {
    menu.classList.toggle("open");
  };

  document.getElementById("themeBtn").onclick = () => {
    const theme = document.body.dataset.theme;
    document.body.dataset.theme = theme === "dark" ? "light" : "dark";
  };

  document.getElementById("printBtn").onclick = () => window.print();

  // ✅ Countdown
  const target = new Date("2026-06-20T17:00:00+02:00").getTime();

  setInterval(() => {
    const now = Date.now();
    const d = Math.max(0, target - now);

    document.getElementById("dd").textContent = Math.floor(d / 86400000);
    document.getElementById("hh").textContent = Math.floor(d / 3600000) % 24;
    document.getElementById("mm").textContent = Math.floor(d / 60000) % 60;
    document.getElementById("ss").textContent = Math.floor(d / 1000) % 60;
  }, 1000);

  // ✅ Equipo
  let currentTeam = "bulba";
  const teamHidden = document.getElementById("teamHidden");

  document.querySelectorAll("[data-team]").forEach(btn => {
    btn.onclick = () => {
      currentTeam = btn.dataset.team;
      teamHidden.value = currentTeam;
    };
  });

  teamHidden.value = currentTeam;

  // ✅ QR fijo
  new QRCode(document.getElementById("qr"), {
    text: "https://baby-shower-massimo.vercel.app/",
    width: 128,
    height: 128
  });
});
