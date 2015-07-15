# MFE

A template for modern front-end projects.

## Goals

The main goal of this project is to have a template project that is optimised
for both development and production environments with all the modern tooling
included and configured to make it easy to just clone the template and start
working on the interesting things with minimal setup and configuration.

At the same time, this project also provides a non-trivial example of a
working app, showing how it is intended to work in real life.

## What’s Included?

- ✓ ES6/ES7 with [Babel]
- ✓ [eslint]
- ✓ [Webpack] with hot module replacement, react-hot-loader,
    and source maps in development
- ✓ [React] with JSX support
- ✓ [react-router]
- ✓ [Sass] with [autoprefixer]
- ✓ Testing: [Karma], [Mocha], [Chai]
- ✓ [CSS Modules]
- ✓ images and fonts as component dependencies
- [redux] hot-reloadable atomic Flux with [Immutable]
- Server side rendering (~~isomorphic~~ [universal]) with [Express]

[Babel]: https://babeljs.io
[eslint]: http://eslint.org
[Webpack]: http://webpack.github.io
[React]: http://facebook.github.io/react/
[react-router]: https://github.com/rackt/react-router
[Express]: http://expressjs.com
[Sass]: http://sass-lang.com
[autoprefixer]: https://github.com/postcss/autoprefixer
[redux]: https://github.com/gaearon/redux
[Immutable]: https://facebook.github.io/immutable-js/
[Karma]: http://karma-runner.github.io/
[Mocha]: http://mochajs.org
[Chai]: http://chaijs.com
[CSS Modules]: https://github.com/css-modules/css-modules
[universal]: https://medium.com/@mjackson/universal-javascript-4761051b7ae9

## Setup

- Clone this repo
- `npm install`
- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) in your browser

## Babel

Experimental features are enabled via transformers. To customise Babel, update
the `.babelrc` file and follow the directions in [babelrc documentation].

[babelrc documentation]: https://babeljs.io/docs/usage/babelrc/

## eslint

To run eslint against the `src` directory:

```sh
npm run lint
```

It's probably a good idea to have your IDE run a linter while you're editing code.

- [Sublime Text 3]

[Sublime Text 3]: https://github.com/este/este/wiki/Recommended-Sublime-Text-3-settings#how-to-setup-the-eslint-for-st3

## Webpack

All webpack related files are in the `webpack` directory.

The "entry points", `webpack/dev.config.es5.js` and
`webpack/prod.config.es5.js` are not in ES6+, but the actual config files that
are loaded are in ES6+.

## React

Supports React components in [plain ES6+ classes], with built-in support for
JSX and ES7 property initializers and the spread operator, thanks to Babel.

[plain ES6+ classes]: http://babeljs.io/blog/2015/06/07/react-on-es6-plus/

## React Router

Routes are defined in `src/routes.js`.

## Testing

The [Karma] configuration is in `config/karma.conf.es5.js`. The entry point is
not ES6+, but `config/karma.conf.js` (where the actual config lives) is.

Karma automatically scans for `*.test.js` in `src`.

There is an example test file for a React component in
`src/components/Hello/__test__/Hello.test.js`. In addition to demonstrating
how to write tests with [Mocha] and [Chai], it also shows how to do shallow
rendering with React to avoid rendering components to DOM (real or fake) for
testing.

To run tests, simply do:

```
npm test
```

It will launch Chrome by default as the browser for karma, but the output of
the tests will be in console, not in the browser. Pressing the debug button
will load Mocha's html output for debugging.

- TODO: write about using rewire for stubbing collaborators
- TODO: CI setup

## Planned Future Inclusions

Pull requests welcome!

- Internationalization with [React Intl]

[React Intl]: http://formatjs.io/react/

## Credits

This project is only possible with the help of many people.

Thank you to the maintainers and contributors of the following projects for
giving me a great starting point for this project.

- [https://github.com/gpbl/isomorphic500](https://github.com/gpbl/isomorphic500)
- [https://github.com/erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
- [https://github.com/gaearon/redux](https://github.com/gaearon/redux)
- [https://github.com/quangbuule/redux-example](https://github.com/quangbuule/redux-example)

Thank you to all the maintainers and contributors of the wonderful tools being
used by this project.

And thank you to [Envato] for sponsoring my time working on this.

[Envato]: http://www.envato.com
