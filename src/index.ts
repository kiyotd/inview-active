import { InviewActive } from "./InviewActive";

export { InviewActive };

declare global {
  interface Window {
    InviewActive: typeof InviewActive;
  }
}

window.InviewActive = InviewActive;
