const colors = {
  emerald: {
    50: '#8BFCDD',
    100: '#77FBD7',
    200: '#50FACC',
    300: '#28F9C0',
    400: '#07F1B1',
    500: '#06C994',
    600: '#04936C',
    700: '#035C44',
    800: '#01261C',
    900: '#000000',
  },
  elephant: {
    50: '#348FD5',
    100: '#2A85CA',
    200: '#236EA8',
    300: '#1C5886',
    400: '#154265',
    500: '#0E2C43',
    600: '#040E15',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  white: {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FEFEFE',
    600: '#E2E2E2',
    700: '#C6C6C6',
    800: '#AAAAAA',
    900: '#8E8E8E',
  },
}
colors.brand = {
  base: colors.emerald['500'],
  light: colors.emerald['200'],
  dark: colors.emerald['700'],
}
colors.dark = {
  base: colors.elephant['500'],
  light: colors.elephant['200'],
  dark: colors.elephant['700'],
}
colors.light = {
  base: colors.white['500'],
  light: colors.white['200'],
  dark: colors.white['700'],
}

module.exports = {
  content: ['./docs/.vitepress/**/*.{vue,md,mdx}'],
  theme: {
    extend: { colors },
  },
  plugins: [],
}
