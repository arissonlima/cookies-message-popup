let modalbox = document.getElementById("modalbox");

function showModal() {
  setTimeout(() => {
    modalbox.style.display = "block";
  }, 1000);
}

function closeModal() {
  modalbox.style.display = "none";
}
