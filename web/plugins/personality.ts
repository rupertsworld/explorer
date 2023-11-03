import { ObservableElement } from 'observable-element';
import { Plugin, definePlugin } from '../plugins';

class PersonalityPlugin extends Plugin {
  personalityString = 'You are very sad.';

  get systemPrompt() {
    return this.personalityString;
  }
}

// Will need to implement shadow root to style the host.

class PersonalityPluginView extends ObservableElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<textarea style="${styles.textarea}"></textarea>`;
  }
}

const styles = {
  textarea: `
    border: 1px solid red;
    resize: none;
    width: 100%;
    height: 100%;
  `,
};

definePlugin('personality', PersonalityPlugin, PersonalityPluginView);
