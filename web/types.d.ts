import { Plugin } from 'explorer';

declare module '*.module.css';

declare global {
  interface Window {
    plugins: {
      [key: string]: Plugin;
    };
  }
}
