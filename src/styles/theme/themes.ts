const lightTheme = {
  // colors
  primaryColor: 'rgb(0, 105, 154)',

  secondaryColor: 'rgb(0, 136, 200)',
  secondaryDarkColor: 'rgb(0, 92, 135)',

  textColor: '#505050',
  lightTextColor: '#919191',

  lightBackColor: '#eee',
  darkBackColor: '#505050',

  // spacing
  sectionSpacing: 60,
  sectionSpacingLarge: 90,

  miniSpacing: 5,
  devideSpace: 30,
  itemSpacing: 10,

  smallCardSpacing: 10,

  // borders
  borderRadius: 5,
};

const darkTheme: Theme = {
  // colors
  primaryColor: 'rgb(0, 105, 154)',

  secondaryColor: 'rgb(0, 136, 200)',
  secondaryDarkColor: 'rgb(0, 92, 135)',

  textColor: '#505050',
  lightTextColor: '#919191',

  lightBackColor: '#eee',
  darkBackColor: '#505050',

  // spacing
  sectionSpacing: 60,
  sectionSpacingLarge: 90,

  miniSpacing: 5,
  devideSpace: 30,
  itemSpacing: 10,

  smallCardSpacing: 10,

  // borders
  borderRadius: 5,
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
