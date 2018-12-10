const baseFontSize = 16;

export default {
  baseFontSize,
  paragraph: {
    base: {
      fontSize: `${baseFontSize}px`,
      lineHeight: `${baseFontSize * 1.5}px`,
      fontWeight: 'normal',
    },
    informational: {
      fontSize: `${baseFontSize *  0.875}px`,
      lineHeight: `${baseFontSize * 1.125}px`,
      fontWeight: 'normal',
    },
  },
  navigation: {
    base: {
      fontSize: `${baseFontSize * .75}px`,
      lineHeight: `${baseFontSize}px`,
      fontWeight: 'normal',
    },
  },
};
