import { InviewActive } from "../InviewActive";

interface Window {
  InviewActive: typeof InviewActive;
}

declare let window: Window;
