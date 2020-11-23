import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    subheading: 'white',
    barBackground: '#24292e',
    appBackground: '#e1e4e8',
    greyBorder: 'grey',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borderRadius: {
    normal: 4,
  },
  margin: {
    normal: 14,
    half: 6,
  },
  padding: {
    normal: 12,
    half: 6
  }
};
  
export default theme;