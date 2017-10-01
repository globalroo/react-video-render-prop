# react-video-render-prop [![Build Status](https://travis-ci.org/globalroo/react-video-render-prop.svg?branch=master)](https://travis-ci.org/globalroo/react-video-render-prop)[![Dependency Status](https://dependencyci.com/github/globalroo/react-video-render-prop/badge)](https://dependencyci.com/github/globalroo/react-video-render-prop)[![codecov](https://codecov.io/gh/globalroo/react-video-render-prop/branch/master/graph/badge.svg)](https://codecov.io/gh/globalroo/react-video-render-prop)

> React render props, what are they?

After reading this PR https://github.com/facebook/react/pull/10741 I wondered what the benefits were.

TL;DR: It's a slightly different way of getting child state visible in the parent component.

The only slight issue I had was getting coverage on 'just' the unit, my usual workflow has me mocking subcomponents.
The child component had to render in order to exercise the inline component in the parent's render function.

```sh
npm install yarn -g
yarn
yarn test (tdd)
yarn testcov (coverage - generated to ./coverage)
yarn start or
yarn build (for a production version - generated to ./build)
```
## Brief description

Super basic create react app project to see what the render props pattern is all about.
