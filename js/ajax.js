document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("rsvpForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        msg.textContent = "✅ RSVP enviado correctamente";
        form.reset();
      } else {
        msg.textContent = "❌ Error al enviar RSVP";
      }
    } catch {
      msg.textContent = "❌ Error de conexión";
    }
  });
});
