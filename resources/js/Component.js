export default class Component {
  #hideClass = "hidden"
  element

  constructor(element) {
    this.element = element
  }

  show() {
    this.element.classList.remove(this.#hideClass)
  }

  hide() {
    this.element.classList.add(this.#hideClass)
  }
} 