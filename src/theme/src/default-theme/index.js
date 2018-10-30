import createTheme from '../create-theme'

export const defaultThemeConfig = {
  controlStyle: 'gradients',
  palette: {
    neutral: '#425A70',
    primary: '#1070ca',
    blue: '#1070ca',
    red: '#ec4c47',
    orange: '#d9822b',
    yellow: '#f7d154',
    green: '#47b881',
    teal: '#14b5d0',
    purple: '#735dd0'
  }
}

export default createTheme(defaultThemeConfig)
