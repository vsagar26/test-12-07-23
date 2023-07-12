const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContainer = document.getElementById('modalContainer');

openModalBtn.addEventListener('click', function() {
  modalContainer.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function() {
  modalContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modalContainer.addEventListener('click', function(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
