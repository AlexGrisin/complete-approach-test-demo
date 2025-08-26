import { dirname, join } from 'path';
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-coverage'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/preset-create-react-app'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('msw-storybook-addon'),
  ],

  features: {
    interactionsDebugger: true,
  },

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  staticDirs: ['../public'],
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
