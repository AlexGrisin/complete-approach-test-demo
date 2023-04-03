# Covering All Bases: Comprehensive Web Application Testing through a Complete Approach

The purpose of this project is to demo the automation tools for the comprehensive web application testing

## Unit test

### Component functional

- [storybook test](https://storybook.js.org/docs/react/writing-tests/interaction-testing) provides a clean-room environment for testing components in isolation. Stories make it easy to explore a component in all its variations, no matter how complex.

- [cypress component testing](https://docs.cypress.io/guides/component-testing/overview) provides a component workbench for you to quickly build and test components from multiple front-end UI libraries — no matter how simple or complex.

### Component non-functional

- Accessibility is the practice of making websites inclusive to all. [accessibility with axe/storybook](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) provides an official a11y addon that can be helpful to make UI components more accessible.

### Component visual

- Visual regression tests can catch bugs in UI appearance. As more teams use isolated components to build their UIs, tools like [storybook/percy](https://docs.percy.io/docs/storybook) becoming more valuable to utilize visual testing to maintain components and component libraries.

## Integration

### Integration functional

- test framework [playwright](https://playwright.dev/docs/intro) + [mock](https://www.mocks-server.org/docs/overview/)

### Integration non-functional

- [lighthouse](https://github.com/GoogleChrome/lighthouse-ci) analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
- [LHCI](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md) is used to gather lighthouse performance trends

### Integration visual

- [e2e with test framework](https://playwright.dev/docs/test-snapshots)

## E2E Testing

### E2E functional

- test framework [playwright](https://playwright.dev/docs/intro)

### E2E visual

- [e2e with test framework/percy](https://docs.percy.io/docs/playwright)

## Web application under test

In the project directory we use a react login application. you can run:

### Start Web application

```shell
yarn storefront:start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build Web application

```shell
yarn storefront:build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
