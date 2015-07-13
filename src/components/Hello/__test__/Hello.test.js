import { expect } from "chai";
import createComponent from "test/createComponent";

// unfortunately this doesn't work:
// import { describe, beforeEach, it } from "mocha";
// so to keep eslint happy we do this:
import { describe, beforeEach, it } from "test/MochaProxy";

import Hello from "../Hello.js";

describe("Hello", () => {
  let hello;

  beforeEach(() => {
    hello = createComponent(Hello, {name: "Monkey"});
  });

  it("sets document title", () => {
    expect(hello.props.title).to.equal("Hello, Monkey!");
  });

  it("renders text", () => {
    const div = hello.props.children;
    const p = div.props.children;
    expect(p.props.children).to.equal("Hello, Monkey!");
  });
});
