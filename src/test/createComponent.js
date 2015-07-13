import React, { addons as ReactAddons } from "react/addons";

/**
 * Creates a shallow-rendered React components.
 *
 * See `src/components/Hello/__test__/Hello.test.js` for usage example.
 *
 * References:
 *
 * - [Shallow rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering)
 * - [Unit testing React components without a DOM](http://simonsmith.io/unit-testing-react-components-without-a-dom/)
 */
export default (component, props, ...children) => {
  const shallowRenderer = ReactAddons.TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
};
