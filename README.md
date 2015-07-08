# MFE Template

A template for modern front-end projects.

The goal is to have a template project that is optimised for both development
and production environments with all the modern tooling included and
configured to make it easy to just clone the template and start working on the
interesting things with minimal setup and configuration.

## What’s Included?

- ✓ ES6 / ES2015 and beyond, with [Babel]
- ✓ [eslint]
- ✓ [Webpack] with hot module replacement, react-hot-loader, and
  sourcemaps in development
- ✓ [React] with JSX support
- ✓ [react-router]
- ✓ Server side rendering (~~isomorphic~~ [universal]) with [Express]
- ✓ [Sass] with [autoprefixer]
- [redux] with [Immutable]
- Modern testing: [Karma], [Mocha], [Chai]
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

Supports React components definitions as [plain ES6 classes], even with ES7
property initializers.

JSX is supported by default, thanks to Babel.

[plain ES6 classes]: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#plain-javascript-classes

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
- [https://github.com/gaearon/flux-react-router-example](https://github.com/gaearon/flux-react-router-example)
- [https://github.com/erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)

Thank you to all the maintainers and contributors of the wonderful tools being
used by this project.

And thank you to [Envato] for sponsoring my time working on this.

[Envato]: http://www.envato.com
