import { ScrollToggleActiveClass } from "../ScrollToggleActiveClass";

interface Window {
  ScrollToggleActiveClass: typeof ScrollToggleActiveClass;
}

declare let window: Window;
