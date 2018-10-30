import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

export default function getButtonClassName({
  scales,
  defaultControlStyles,
  getPrimaryButtonStylesForIntent,
  getTextColorForIntent
}) {
  const { disabled } = defaultControlStyles

  /**
   * Get button appearance.
   * @param {string} appearance - default, primary, minimal.
   * @param {string} intent - none, success, warning, danger.
   * @return {Object} the appearance of the button.
   */
  const getButtonAppearance = (appearance, intent) => {
    switch (appearance) {
      case 'primary': {
        const { styles, focusColor } = getPrimaryButtonStylesForIntent(intent)
        return Themer.createButtonAppearance({
          disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            boxShadow: `inset 0 0 0 1px ${
              scales.neutral.N5A
            }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`,
            ...styles.base
          },
          hover: {
            ...styles.hover
          },
          focus: {
            boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
              scales.neutral.N4A
            }, inset 0 -1px 1px 0 ${scales.neutral.N5A}`
          },
          active: {
            boxShadow: `inset 0 0 0 1px ${
              scales.neutral.N4A
            }, inset 0 1px 1px 0 ${scales.neutral.N2A}`,
            ...styles.active
          },
          focusAndActive: {
            boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
              scales.neutral.N4A
            }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
          }
        })
      }
      case 'minimal': {
        const intentTextColor = getTextColorForIntent(intent, scales.primary.P9)
        return Themer.createButtonAppearance({
          disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: scales.neutral.N2A
          },
          focus: {
            boxShadow: `0 0 0 3px ${scales.primary.P5A}`
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: scales.primary.P3A
          },
          focusAndActive: {}
        })
      }
      case 'default':
      default: {
        const intentTextColor = getTextColorForIntent(intent)
        return Themer.createButtonAppearance({
          disabled,
          base: {
            color: intentTextColor,
            ...defaultControlStyles.base
          },
          hover: defaultControlStyles.hover,
          focus: defaultControlStyles.focus,
          active: defaultControlStyles.active,
          focusAndActive: defaultControlStyles.focusAndActive
        })
      }
    }
  }

  /**
   * Get the className of a `Button`|`IconButton`.
   * @param {string} appearance - default, primary, minimal.
   * @param {Intent} intent - none, success, warning, danger.
   * @return {string} the appearance class name.
   */
  return memoizeClassName(getButtonAppearance)
}
