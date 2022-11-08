const form = document.querySelector("form")
const weightInput = document.querySelector("#weight-input")
const heightInput = document.querySelector("#height-input")

const Modal = {
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

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = weightInput.value
  const height = heightInput.value

  const imc = calcIMC(weight, height)
  changeModalIMC(imc)
  Modal.open()
}

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function changeModalIMC(imcResult) {
  Modal.message.innerText = `Seu IMC é de ${imcResult}`
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}
