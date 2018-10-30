import linearGradient from '../utils/linearGradient'

export default function createDefaultControlStyles({ scales, controlStyle }) {
  if (controlStyle === 'flat') {
    return {
      disabled: {
        opacity: 0.8,
        backgroundImage: 'none',
        backgroundColor: scales.neutral.N2A,
        boxShadow: 'none',
        color: scales.neutral.N7A
      },
      base: {
        backgroundColor: 'white',
        boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}`
      },
      hover: {
        backgroundColor: scales.neutral.N1A
      },
      focus: {
        boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
          scales.neutral.N6A
        }`
      },
      active: {
        backgroundImage: 'none',
        backgroundColor: scales.primary.P3A,
        boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`
      },
      focusAndActive: {
        boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
          scales.neutral.N5A
        }`
      }
    }
  }
  // Gradients
  return {
    disabled: {
      opacity: 0.8,
      backgroundImage: 'none',
      backgroundColor: scales.neutral.N2A,
      boxShadow: 'none',
      color: scales.neutral.N7A
    },
    base: {
      backgroundColor: 'white',
      backgroundImage: linearGradient('#FFFFFF', '#F4F5F7'),
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    hover: {
      backgroundImage: linearGradient('#FAFBFB', '#EAECEE')
    },
    focus: {
      boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
        scales.neutral.N5A
      }, inset 0 -1px 1px 0 ${scales.neutral.N4A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor: scales.primary.P3A,
      boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${
        scales.neutral.N2A
      }`
    },
    focusAndActive: {
      boxShadow: `0 0 0 3px ${scales.primary.P4A}, inset 0 0 0 1px ${
        scales.neutral.N5A
      }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
    }
  }
}
