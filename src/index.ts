export type OptionsType = {
  selectors: string[];
  offset: number;
  activeClassName: string;
  once: boolean;
};

/**
 * Assigns a class to the specified element in response to scrolling.
 * @param {OptionsType} options
 * @example
 * // HTML
 * <script>
 * window.addEventListener('DOMContentLoaded', () => {
 *   new ScrollToggleActiveClass({
 *     selectors: ['.box1', '.box2'], // Array of selectors. required
 *     offset: 0, // Offset from the top of the screen. Default: 0
 *     activeClassName: 'active', // Class name to be given once inside the screen. Default: 'active'
 *     once: true, // Off-screen does not remove class. Default: false
 *   });
 * });
 * </script>
 */
export class ScrollToggleActiveClass {
  private options: OptionsType;

  constructor(options: OptionsType) {
    this.options = options;
    if (!this.options.selectors) throw new Error("targets is required.");
    if (!this.options.offset) this.options.offset = 0;
    if (!this.options.activeClassName) this.options.activeClassName = "active";
    if (!this.options.once) this.options.once = false;

    this.init();
  }

  private init() {

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.options.activeClassName);
        } else {
          if (!this.options.once) {
            console.log(this.options.once);
            entry.target.classList.remove(this.options.activeClassName);
          }
        }
      });
    }, {
      rootMargin: `-${this.options.offset}px 0px 0px 0px`,
    });

    this.options.selectors.map((selector: string) => {

      const targets: NodeListOf<Element> = document.querySelectorAll(selector);

      if (targets.length === 0) {
        console.log(`There is no target(${selector}).`);
        return;
      }

      const targetsArr: Element[] = Array.from(targets);

      targetsArr.forEach((target: Element) => {
        observer.observe(target);
      });

    });

  }

}

window.ScrollToggleActiveClass = ScrollToggleActiveClass;
