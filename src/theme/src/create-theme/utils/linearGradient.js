/**
 * @param {String} top - color.
 * @param {String} bottom - color.
 * @return {String} CSS background property.
 */
export default function linearGradient(top, bottom) {
  return `linear-gradient(to bottom, ${top}, ${bottom})`;
}
