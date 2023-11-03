import 'explorer';
import { store, toggleSideDock } from './stores/local-state';

const sideDockElems = document.querySelectorAll('side-dock');
const sideDockToggle = document.getElementById(
  'side-dock-toggle'
) as HTMLElement;

sideDockToggle.addEventListener('click', toggleSideDock);

store.subscribe((state) => {
  // Update side dock toggle
  if (state.panels.sideDock) {
    sideDockElems.forEach((el) => el.setAttribute('open', 'open'));
  } else {
    sideDockElems.forEach((el) => el.removeAttribute('open'));
  }
});

class ExtensionView extends HTMLElement {
  connectedCallback() {
    const name = 'personality-view';
    this.innerHTML = `<${name}></${name}>`;
  }
}

customElements.define('extension-view', ExtensionView);

document.addEventListener('plugin-connected', () => {
  console.log('Plugin event!');
  console.log(window.plugins['personality'].systemPrompt);
});
