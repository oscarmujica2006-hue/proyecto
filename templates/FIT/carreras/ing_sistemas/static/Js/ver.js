

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("row_mis_vis_per");
  if (!container) return;
  const tabs = container.querySelectorAll(".mis_vis_per");
  // Inicialmente todos cerrados
  tabs.forEach(tab => tab.classList.remove("active"));
  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      // Evita que el click en el contenido lo vuelva a cerrar
      if (e.target.closest('.mis_vis_per') !== tab) return;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
