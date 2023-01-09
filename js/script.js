let modalbox = document.getElementById("modalbox");

function showModal() {
  setTimeout(() => {
    modalbox.style.display = "block";
  }, 2000);
}

function closeModal() {
  modalbox.style.display = "none";
}
