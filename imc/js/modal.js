export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .title span"),
  buttonClose: document.querySelector(".modal-wrapper button.close"),
  open() {
    this.wrapper.classList.toggle("open")
  },
  close() {
    this.wrapper.classList.toggle("open")
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if (event.key == "Escape") Modal.close()
}
