import { ObservableElement } from 'observable-element';

class MyElement extends ObservableElement {
  constructor() {
    super();
    this.observe(['name'], () => this.updateName());
  }

  connectedCallback() {
    this.innerHTML = `Hello, <span id="name">world!</span>`;
  }

  updateName() {
    this.querySelector('#name').innerText = this.name;
  }
}

customElements.define('my-element', MyElement);
