import { injectAxe, checkA11y } from 'axe-playwright';

import { TestRunnerConfig, waitForPageReady } from '@storybook/test-runner';

// import { toMatchImageSnapshot } from 'jest-image-snapshot';

// const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  // setup() {
  //   expect.extend({ toMatchImageSnapshot });
  // },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
  // async postVisit(page, context) {
  //   // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
  //   const elementHandler = await page.$('#root');
  //   const innerHTML = await elementHandler.innerHTML();
  //   console.log('111111111');
  //   expect(innerHTML).toMatchSnapshot();
  // },

  // async postVisit(page, context) {
  //   // Waits for the page to be ready before taking a screenshot to ensure consistent results
  //   await waitForPageReady(page);
  //   // To capture a screenshot for for different browsers, add page.context().browser().browserType().name() to get the browser name to prefix the file name
  //   const image = await page.screenshot();
  //   expect(image).toMatchImageSnapshot({
  //     customSnapshotsDir,
  //     customSnapshotIdentifier: context.id,
  //   });
  // },
};
