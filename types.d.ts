import { Plugin } from './web/plugins';

declare module '*.module.css';

declare global {
  interface Window {
    plugins: {
      [key: string]: Plugin;
    };
  }
}
