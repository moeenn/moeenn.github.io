import Component from "./Component.js"

export default class Modal extends Component {
  constructor(element) {
    super(element)
    this.#addCloseListener()
  }

  #addCloseListener() {
    const closeBtn = this.element.querySelector("[data-close]")
    closeBtn.addEventListener("click", () => this.hide())
  }
} 
