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
export declare class ScrollToggleActiveClass {
    options: OptionsType;
    constructor(options: OptionsType);
    init(): void;
}
