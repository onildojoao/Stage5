import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {calcIMC, changeModalIMC, validateInputNumber } from "./utils.js"

const form = document.querySelector("form")
const weightInput = document.querySelector("#weight-input")
const heightInput = document.querySelector("#height-input")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = weightInput.value
  const height = heightInput.value

  const weightOrHeightIsNotANumber =
    validateInputNumber(weight) || validateInputNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  AlertError.close()

  const imc = calcIMC(weight, height)
  changeModalIMC(imc)
  Modal.open()
}

weightInput.oninput = () => {AlertError.close()}
heightInput.oninput = () => {AlertError.close()}