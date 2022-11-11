import { Modal } from "./modal.js"

export function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

export function changeModalIMC(imcResult) {
  Modal.message.innerText = `Seu IMC é de ${imcResult}`
}

export function validateInputNumber(value) {
  return isNaN(value) || value == ""
}
