function openQuestionModal() {
    const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modalOverlay = document.getElementById('modalOverlay');

openModalButton.addEventListener('click', function() {
  modalOverlay.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  modalOverlay.style.display = 'none';
});
}