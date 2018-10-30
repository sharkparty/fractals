import { Intent } from '../../../constants'
import { defaultThemeConfig } from '../default-theme'
import themedProperty from './utils/themedProperty'
import createColorScales from './utils/createColorScales'
import linearGradient from './utils/linearGradient'

export default function createStyles(config = {}) {
  const scales = createColorScales(config.palette, defaultThemeConfig.palette);
  const controlStyle = config.controlStyle || defaultThemeConfig.controlStyle;

  const palette = {};
  for (const key in scales) {
    if (Object.prototype.hasOwnProperty.call(scales, key)) {
      palette[key] = {
        lightest: scales[key][`${key[0].toUpperCase()}1`],
        light: scales[key][`${key[0].toUpperCase()}4`],
        base: scales[key][`${key[0].toUpperCase()}9`],
        dark: scales[key][`${key[0].toUpperCase()}10`]
      }
    }
  }

  /**
   * This object are functional colors being used the default theme.
   * A required property is required by the default theme NOT by Evergreen itself.
   */
  const colors = {
    /**
     * Available on Pane as `<Pane background="tint1" />`
     * @property {string} background.tint1 - Lightest tinted background color. Required property.
     * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
     * @property {string} background.overlay - color used for the overlay
     */
    background: {
      tint1: scales.neutral.N1,
      tint2: scales.neutral.N2,
      overlay: scales.neutral.N7A,

      // Non required.
      yellowTint: palette.yellow.lightest,
      greenTint: palette.green.lightest,
      orangeTint: palette.orange.lightest,
      redTint: palette.red.lightest,
      primaryTint: palette.primary.lightest,
      purpleTint: palette.purple.lightest,
      tealTint: palette.teal.lightest
    },

    /**
     * Available on Pane as `<Pane borderBottom borderRight="muted" />`
     * @property {string} text.default - Required property.
     * @property {string} text.muted - Slightly lighter color than default. Required property.
     */
    border: {
      default: scales.neutral.N4, // Was BorderColors.muted in v3 and under.
      muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under
    },

    /**
     * Text colors available on Text as `<Text color="muted" />`.
     * @property {string} text.muted - Required property.
     * @property {string} text.default - Required property. Default for text.
     * @property {string} text.dark - Required property. Default for headings.
     */
    text: {
      muted: scales.neutral.N8,
      default: scales.neutral.N9,
      dark: scales.neutral.N10,
      selected: palette.primary.base,

      // Intent.
      success: palette.green.dark,
      info: palette.primary.dark,
      danger: palette.red.dark,
      warning: palette.orange.dark
    },

    /**
     * Icon colors available on Icon.
     * @property {string} icon.default - Required property.
     * @property {string} icon.muted - Required property.
     * @property {string} icon.selected - Required property.
     */
    icon: {
      default: scales.neutral.N8,
      muted: scales.neutral.N7,
      disabled: scales.neutral.N5A,
      selected: palette.primary.base,

      // Intent.
      success: palette.green.base,
      info: palette.primary.base,
      danger: palette.red.base,
      warning: palette.orange.base
    },

    /**
     * Used for Alerts and other (future) componentes that express intent.
     * @property {string} intent.none - Required property.
     * @property {string} intent.success - Required property.
     * @property {string} intent.danger - Required property.
     * @property {string} intent.warning - Required property.
     */
    intent: {
      none: palette.primary.base,
      success: palette.green.base,
      danger: palette.red.base,
      warning: palette.orange.base
    }
  }

  /**
   * Fills are used in Avatars and Badges.
   */
  const fills = {}

  fills.solid = {
    neutral: {
      color: 'white',
      backgroundColor: palette.neutral.base
    },
    primary: {
      color: 'white',
      backgroundColor: palette.primary.base
    },
    blue: {
      color: 'white',
      backgroundColor: palette.blue.base
    },
    red: {
      color: 'white',
      backgroundColor: palette.red.base
    },
    orange: {
      color: 'white',
      backgroundColor: palette.orange.base
    },
    yellow: {
      color: palette.yellow.darkest,
      backgroundColor: palette.yellow.base
    },
    green: {
      color: 'white',
      backgroundColor: palette.green.base
    },
    teal: {
      color: 'white',
      backgroundColor: palette.teal.base
    },
    purple: {
      color: 'white',
      backgroundColor: palette.purple.base
    }
  }

  fills.subtle = {
    neutral: {
      color: colors.text.default,
      backgroundColor: palette.neutral.light
    },
    primary: {
      color: palette.primary.dark,
      backgroundColor: palette.primary.light
    },
    blue: {
      color: palette.blue.dark,
      backgroundColor: palette.blue.light
    },
    red: {
      color: palette.red.dark,
      backgroundColor: palette.red.light
    },
    orange: {
      color: palette.orange.dark,
      backgroundColor: palette.orange.light
    },
    yellow: {
      color: palette.yellow.dark,
      backgroundColor: palette.yellow.light
    },
    green: {
      color: palette.green.dark,
      backgroundColor: palette.green.light
    },
    teal: {
      color: palette.teal.dark,
      backgroundColor: palette.teal.light
    },
    purple: {
      color: palette.purple.dark,
      backgroundColor: palette.purple.light
    }
  }

  fills.options = Object.keys(fills.solid)

  const borderShadowColor = scales.neutral.N5A // Used to be colors.neutral['80A'] in v3 and down.
  const blurryShadowColor = scales.neutral.N6A // Used to be colors.neutral['50A'] in v3 and down.

  /**
   * Elevation styles are applied as box shadows.
   * Available levels: 0, 1, 2, 3, 4.
   */
  const elevations = config.elevations || [
    `0 0 1px ${borderShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
    `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
  ]

  const fontFamilies = {
    /**
     * @property {string} display - Used for headings larger than 20px.
     */
    display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

    /**
     * @property {string} ui - Used for text and UI (which includes almost anything).
     */
    ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

    /**
     * @property {string} mono - Used for code and sometimes numbers in tables.
     */
    mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
  }

  /**
   * Heading styles.
   * @property {Object} headings.900
   * @property {Object} headings.800
   * @property {Object} headings.700
   * @property {Object} headings.600
   * @property {Object} headings.500 - Default.
   * @property {Object} headings.400
   * @property {Object} headings.300
   * @property {Object} headings.200
   * @property {Object} headings.100
   */
  const headings = {
    '900': {
      fontSize: '35px',
      fontWeight: 500,
      lineHeight: '40px',
      letterSpacing: '-0.2px',
      marginTop: 52,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '800': {
      fontSize: '29px',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '-0.2px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '700': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '-0.07px',
      marginTop: 40,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '600': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      fontFamily: fontFamilies.display,
      color: colors.text.dark
    },
    '500': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 24,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '400': {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '300': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.dark
    },
    '200': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    },
    '100': {
      fontSize: '11px',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '16px',
      letterSpacing: '0.6px',
      marginTop: 16,
      fontFamily: fontFamilies.ui,
      color: colors.text.muted
    }
  }

  /**
   * Text styles for single line text.
   * This is used in the Text component. The Text component is used by:
   * - Small
   * - Strong
   * - Code
   * - ListItem
   * - Label
   * - Link
   * @property {Object} 600 - Required property.
   * @property {Object} 500 - Required property.
   * @property {Object} 400 - Required property. Default.
   * @property {Object} 300 - Required property.
   */
  const text = {
    /**
     * It's useful to have 600 because `Link` uses the `Text` component.
     * A `Link` could be used as 600 in the context of a breadcrumb.
     */
    '600': {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      /**
       * Use font family display because the font-size is 20px.
       */
      fontFamily: fontFamilies.display
    },
    '500': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16
    },
    '400': {
      // Default
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 12
    },
    '300': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 12
    }
  }

  /**
   * Text styles for paragraphs (multi line text).
   * This is used in the Paragraph.
   * @property {Object} text.500 - Required property.
   * @property {Object} text.400 - Required property. Default.
   * @property {Object} text.300 - Required property.
   */
  const paragraph = {
    '500': {
      ...text['500'],
      lineHeight: '24px'
    },
    '400': {
      ...text['400'],
      lineHeight: '21px'
    },
    '300': {
      ...text['300'],
      lineHeight: '18px'
    }
  }

  /**
   * Controls include:
   * - Button
   * - IconButton
   * - TextInput
   * @param {number} height
   * @return {number} border radius
   */
  const getBorderRadiusForControlHeight = height => {
    if (height <= 40) return 3
    return 4
  }

  /**
   * Get the text size for a control with a certain height.
   * @param {number} height
   * @return {number} text size of the control height.
   */
  const getTextSizeForControlHeight = height => {
    if (height <= 24) return 300
    if (height <= 28) return 300
    if (height <= 32) return 300
    if (height <= 36) return 400
    if (height <= 40) return 400
    if (height <= 48) return 500
    if (height <= 56) return 700
    return 800
  }

  /**
   * Get the size for a icon in a Button with a certain height.
   * @param {number} height
   * @return {number} icon size
   */
  const getIconSizeForButton = height => {
    if (height <= 28) return 12
    if (height <= 32) return 12
    if (height <= 40) return 16
    if (height <= 48) return 18
    return 20
  }

  // Use the same for input components.
  const getIconSizeForInput = getIconSizeForButton
  const getIconSizeForSelect = getIconSizeForButton

  /**
   * Get the size for a icon in a IconButton with a certain height.
   * @param {number} height
   * @return {number} icon size
   */
  const getIconSizeForIconButton = height => {
    if (height <= 28) return 12
    if (height <= 32) return 14 // Slightly bigger than getIconSizeForButton
    if (height <= 40) return 16
    if (height <= 48) return 18
    return 20
  }

  /**
   * Get background property.
   * @param {string} background
   * @return {string} background property.
   */
  const getBackground = background => {
    /**
     * Return one of theme presets or the original value.
     */
    return themedProperty(colors.background, background)
  }

  /**
   * Get box-shadow (elevation).
   * @param {string} level — level of elevation.
   * @return {string} elevation box-shadow.
   */
  const getElevation = level => {
    /**
     * There is no fallback, undefined will be returned.
     */
    return elevations[level]
  }

  /**
   * Get the color for an icon.
   * @param {string} color
   * @return {string} color of the icon
   */
  const getIconColor = color => {
    /**
     * Check if there is a preset in the theme for the icon color.
     */
    return themedProperty(colors.icon, color)
  }

  /**
   * Get the properties for an icon based on the intent.
   * @param {Intent} intent
   * @return {Object} properties
   */
  const getIconForIntent = intent => {
    switch (intent) {
      case Intent.SUCCESS:
        return { icon: 'tick-circle', color: 'success' }
      case Intent.DANGER:
        return { icon: 'error', color: 'danger' }
      case Intent.WARNING:
        return { icon: 'warning-sign', color: 'warning' }
      case Intent.NONE:
      default:
        return { icon: 'info-sign', color: 'info' }
    }
  }

  /**
   * Heading styles.
   * @param {number} size - 100–900. 500 is default.
   * @return {Object} heading style.
   */
  const getHeadingStyle = size => {
    return themedProperty(headings, String(size))
  }

  /**
   * Text styles for single line text.
   * This is used in the Text component. The Text component is used by:
   * - Small
   * - Strong
   * - Code
   * - ListItem
   * - Label
   * @param {number} size - 300–500. 400 is default.
   * @return {Object} text style.
   */
  const getTextStyle = size => {
    return themedProperty(text, String(size))
  }

  /**
   * Text styles for paragraphs (multi line text).
   * This is used in the Paragraph.
   * @param {number} size - 300–500. 400 is default.
   * @return {Object} text style.
   */
  const getParagraphStyle = size => {
    return themedProperty(paragraph, String(size))
  }

  /**
   * Get the font family. This is used to override the font family.
   * @param {string} fontFamily
   * @return {string} font family
   */
  const getFontFamily = fontFamily => {
    /**
     * Allow for passing in a custom fontFamily not in the theme.
     */
    return themedProperty(fontFamilies, fontFamily)
  }

  /**
   * Get the text color. This is used to override the color.
   * @param {string} fontFamily
   * @return {string} font family
   */
  const getTextColor = color => {
    /**
     * Allow for passing in a custom text color not in the theme.
     */
    return themedProperty(colors.text, color)
  }

  /**
   * @param {Intent} intent
   * @return {String} color
   */
  const getTextColorForIntent = (intent, defaultColor) => {
    switch (intent) {
      case Intent.SUCCESS:
        return colors.text.success
      case Intent.DANGER:
        return colors.text.danger
      case Intent.WARNING:
        return colors.text.warning
      default:
        return defaultColor || colors.text.default
    }
  }

  /**
   * @param {number} size
   * @param {number} sizeLimitOneCharacter
   * @return {number} font size
   */
  const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
    if (size <= sizeLimitOneCharacter) {
      return Math.ceil(size / 2.2)
    }
    return Math.ceil(size / 2.6)
  }

  return {
    controlStyle,

    // Colors.
    scales,
    palette,
    colors,
    fills,

    // Elevations.
    elevations,

    // Typography.
    fontFamilies,
    headings,
    text,
    paragraph,

    // Private Theme Helpers.
    linearGradient,
    getTextColorForIntent,

    // Public Theme Helpers.
    getBorderRadiusForControlHeight,
    getTextSizeForControlHeight,
    getIconSizeForButton,
    getIconSizeForInput,
    getIconSizeForSelect,
    getIconSizeForIconButton,
    getBackground,
    getElevation,
    getIconColor,
    getIconForIntent,
    getHeadingStyle,
    getTextStyle,
    getParagraphStyle,
    getFontFamily,
    getTextColor,
    getAvatarInitialsFontSize
  }
}
