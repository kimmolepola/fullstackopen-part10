import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorSubheading: {
    color: theme.colors.subheading,
  },
  padding: {
    paddingLeft: Constants.statusBarHeight/3,
    paddingRight: Constants.statusBarHeight/3,
    paddingTop: Constants.statusBarHeight/3,
    paddingBottom: Constants.statusBarHeight/3,
    alignSelf: 'flex-start',
    borderRadius: theme.borderRadius.normal,
  },
  backgroundColor: {
    backgroundColor: theme.colors.primary,
  },
  paddingTopBottom: {
    paddingTop: Constants.statusBarHeight/2,
    paddingBottom: Constants.statusBarHeight/2,
  },
});

const Text = ({ paddingTopBottom, backgroundColor, padding, color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    color === 'subheading' && styles.colorSubheading,
    padding === 'true' && styles.padding,
    backgroundColor === 'true' && styles.backgroundColor,
    paddingTopBottom === 'true' && styles.paddingTopBottom,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;