import Component from "./Component.js"

export default class Navigation extends Component {
  #eventName = "navigate"
  #active

  constructor(element) {
    super(element)
    this.#addClickListeners()
  }

  get page() {
    return this.#active
  }

  get eventName() {
    return this.#eventName
  }

  #addClickListeners() {
    const links = this.element.querySelectorAll("[data-link]")
    for (const link of links) {
      link.addEventListener("click", e => {
        const page = e.target.dataset.link
        this.#active = page

        this.element.dispatchEvent(
          new CustomEvent(this.#eventName, { detail: page })
        )
      })
    }
  }
} 
