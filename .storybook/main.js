/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // see workaround: https://github.com/storybookjs/storybook/issues/14856#issuecomment-1123861703
  async viteFinal(config, { configType }) {
    config.resolve.alias['path'] = 'path-browserify'
    return config
  },
};
export default config;
