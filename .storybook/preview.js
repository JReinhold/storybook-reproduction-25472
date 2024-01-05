import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import isChromatic from "chromatic/isChromatic";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // don't add withTests when Chromatic is snapshotting because they'll cause Safari to fail
    !isChromatic() ? withTests({ results }) : (story) => story()
  ],
};

export default preview;
