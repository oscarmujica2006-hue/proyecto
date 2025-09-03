  // Mostrar la imagen al hacer doble clic
  document.querySelectorAll('.u-image').forEach(function(img) {
    img.addEventListener('dblclick', function() {
      var modal = document.getElementById('imageModal');
      var modalImg = document.getElementById('modalImage');
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Función para cerrar el visor
  function closeImageModal() {
    document.getElementById('imageModal').style.display = "none";
  }