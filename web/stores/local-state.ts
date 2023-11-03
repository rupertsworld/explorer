import { Store } from 'store-thing';

interface State {
  panels: {
    settings: boolean;
    sideDock: boolean;
  };
}

const initState = {
  panels: {
    settings: false,
    sideDock: true,
  },
};

export const store = new Store<State>('store', initState, {
  storage: 'session',
});

export function toggleSettings() {
  store.update((state) => (state.panels.settings = !state.panels.settings));
}

export function toggleSideDock() {
  store.update((state) => (state.panels.sideDock = !state.panels.sideDock));
}
