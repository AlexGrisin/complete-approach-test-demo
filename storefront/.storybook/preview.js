export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: {
    config: {
      rules: [],
    },
    // Axe's options parameter
    options: {},
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
