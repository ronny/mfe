# MFE Template

A template for modern front-end projects.

The goal is to have a template project that is optimised for both development
and production environments with all the modern tooling included and
configured to make it easy to just clone the template and start working on the
interesting things with minimal setup and configuration.

## What’s Included?

- ES6 / ES2015 and beyond, with [Babel]
- [eslint]
- [Webpack] with hot module replacement, react-hot-loader, and
  sourcemaps in development
- [React] with JSX support
- [Flux] with [Immutable]
- [react-router]
- Server side rendering (isomorphic) with [Express]
- [Sass] with [autoprefixer]
- Modern testing: [Karma], [Mocha], [Chai]
- Internationalization with [React Intl]

[Babel]: https://babeljs.io
[React]: http://facebook.github.io/react/
[Flux]: https://facebook.github.io/flux/
[Immutable]: https://facebook.github.io/immutable-js/
[react-router]: https://github.com/rackt/react-router
[Webpack]: http://webpack.github.io
[eslint]: http://eslint.org
[autoprefixer]: https://github.com/postcss/autoprefixer
[Karma]: http://karma-runner.github.io/
[Mocha]: http://mochajs.org
[Chai]: http://chaijs.com
[Express]: http://expressjs.com
[React Intl]: http://formatjs.io/react/
[Sass]: http://sass-lang.com


## Setup

- Clone this repo
- `npm install`
- `npm run dev`


## Babel

To customise Babel, create a `.babelrc` file and follow the documentation at
[https://babeljs.io/docs/usage/babelrc/](https://babeljs.io/docs/usage/babelrc/).

## eslint

To run eslint against the `src` directory:

```sh
npm run lint
```

## Webpack





## Credits

This project is only possible with the help of many people.

Thank you to the maintainers and contributors of the following projects:

- [https://github.com/gpbl/isomorphic500](https://github.com/gpbl/isomorphic500)
- [https://github.com/gaearon/flux-react-router-example](https://github.com/gaearon/flux-react-router-example)

And thank you to all the maintainers and contributors of the wonderful tools
being used by this project.
