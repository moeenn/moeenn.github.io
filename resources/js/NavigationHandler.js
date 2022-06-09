export default class NavigationHandler {
  #navigation
  #modal
  #pages

  constructor(navigation, modal, pages) {
    this.#navigation = navigation
    this.#modal = modal
    this.#pages = pages

    this.addNavigationListener()
  }

  addNavigationListener() {
    this.#navigation.element.addEventListener(
      this.#navigation.eventName,
      e => this.handleNavigationChange(e.detail)
    )
  }

  handleNavigationChange(page) {
    this.#modal.show()
    this.#activatePage(page)
  }

  #activatePage(pageName) {
    for (const page of this.#pages) {
      const pageKey = page.element.dataset.target

      pageKey === pageName
        ? page.show()
        : page.hide()
    }
  }
} 
