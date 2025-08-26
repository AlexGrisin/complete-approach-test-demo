import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

export const parameters = {
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
  features: {
    interactionsDebugger: true,
  },
};
export const loaders = [mswLoader];
export const tags = ['autodocs'];
