# Covering All Bases: Comprehensive Web Application Testing through a Complete Approach

The purpose of this project is to demo the automation tools for the comprehensive web application testing

## Scope

### Unit

- [storybook tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- [cypress component tests](https://docs.cypress.io/guides/component-testing/overview)

### Integration

- test framework [playwright](https://playwright.dev/docs/intro) + [mock](https://www.mocks-server.org/docs/overview/)

### System/E2E

- test framework [playwright](https://playwright.dev/docs/intro)

### Non-functional

- [lighthouse audit](https://github.com/GoogleChrome/lighthouse-ci) + [LHCI](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md) for performance trends
- [accessibility with axe/storybook](https://storybook.js.org/docs/react/writing-tests/accessibility-testing)

### Visual

- [component with storybook/percy](https://docs.percy.io/docs/storybook)
- [e2e with test framework](https://playwright.dev/docs/test-snapshots)
- [e2e with test framework/percy](https://docs.percy.io/docs/playwright)

## Web application under test

In the project directory we use a react login application. you can run:

### Start Web application

```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build Web application

```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Component testing

### Storybook test

Storybook provides a clean-room environment for testing components in isolation. Stories make it easy to explore a component in all its variations, no matter how complex.

See more about [storybook testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing).

### Cypress component testing

Cypress Component Testing provides a component workbench for you to quickly build and test components from multiple front-end UI libraries — no matter how simple or complex.

See more about [cypress component testing](https://docs.cypress.io/guides/component-testing/overview).

### Storybook accessibility

Accessibility is the practice of making websites inclusive to all. Storybook provides an official a11y addon.

See more about [storybook accessibility](https://storybook.js.org/docs/react/writing-tests/accessibility-testing).

### Lighthouse CI

Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

See more about [Lighthouse](https://github.com/GoogleChrome/lighthouse)
See more about [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Storybook visual

Visual tests, also called visual regression tests, catch bugs in UI appearance. As more teams use isolated components to build their UIs, it's becoming more valuable to utilize visual testing to maintain components and component libraries.

See more about [storybook/percy](https://docs.percy.io/docs/storybook)
