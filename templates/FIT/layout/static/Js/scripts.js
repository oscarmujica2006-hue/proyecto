  // Mostrar la imagen normal  al hacer doble clic
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


  // Mostrar la imagen de la URL al hacer clic de la css
  document.querySelectorAll('.u-image').forEach(function(img) {
    img.addEventListener('click', function() {
      const imageUrl = this.dataset.img;

      if (imageUrl) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = 'block';
        modalImg.src = imageUrl;
      }
    });
  });

  // Función para cerrar el visor
  function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
  }
