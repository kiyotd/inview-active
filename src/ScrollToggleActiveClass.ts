import { OptionsType } from "./types/OptionsType";

/**
 * Assigns a class to the specified element in response to scrolling.
 * @param {OptionsType} options
 * @example
 * // HTML
 * <script>
 * window.addEventListener('DOMContentLoaded', () => {
 *   new ScrollToggleActiveClass({
 *     selectors: ['.box1', '.box2'], // Array of selectors. required
 *     activeClassName: 'active', // Class name to be given once inside the screen. Default: 'active'
 *     inActive: true, // Add a class when it is outside the screen. Default: false
 *     inActiveClassName: 'in-active', // Class name to be given once outside the screen. Default: 'in-active'
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
    if (!this.options.rootMargin) this.options.rootMargin = "0px 0px 0px 0px";
    if (!this.options.activeClassName) this.options.activeClassName = "active";
    if (!this.options.inActive) this.options.inActive = false;
    if (!this.options.inActiveClassName) this.options.inActiveClassName = "in-active";
    if (!this.options.once) this.options.once = false;

    this.init();
  }

  private init() {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          // 要素が領域に入った時
          if (entry.isIntersecting) {
            entry.target.classList.add(this.options.activeClassName);
            if (this.options.inActive) {
              entry.target.classList.remove(this.options.inActiveClassName);
            }
          } else {
            // 要素が領域から出た時

            // once が false の場合、active クラスを外さない
            if (!this.options.once) {
              entry.target.classList.remove(this.options.activeClassName);
            }

            // inActive が true の場合
            if (this.options.inActive) {
              // かつ要素に `active` クラスがない場合は `in-active` を付与
              if (!entry.target.classList.contains(this.options.activeClassName)) {
                entry.target.classList.add(this.options.inActiveClassName);
              }
            }
          }
        });
      },
      {
        rootMargin: this.options.rootMargin,
      },
    );

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
