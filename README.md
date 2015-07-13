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
- ✓ Server side rendering (~~isomorphic~~ [universal]) with [Express]
- ✓ [Sass] with [autoprefixer]
- [redux] hot-reloadable atomic Flux with [Immutable]
- Testing: [Karma], [Mocha], [Chai]
- [CSS Modules]

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

## React

Supports React components in [plain ES6+ classes], with built-in support for
JSX and ES7 property initializers and the spread operator, thanks to Babel.

[plain ES6+ classes]: http://babeljs.io/blog/2015/06/07/react-on-es6-plus/

## React Router

Routes are defined in `src/routes.js`.


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
