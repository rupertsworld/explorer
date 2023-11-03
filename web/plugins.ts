export class Plugin {
  get systemPrompt(): string | undefined {
    return undefined;
  }
}

export function definePlugin(
  id: string,
  PluginClass: typeof Plugin,
  elem: typeof HTMLElement
) {
  if (!window.plugins) window.plugins = {};
  window.plugins[id] = new PluginClass();
  customElements.define(`${id}-view`, elem);
  console.log('Plugin defined:', id);
  document.dispatchEvent(new Event('plugin-connected'));
}
