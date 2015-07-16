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

  it("renders text", () => {
    const spans = hello.props.children;
    const texts = spans.map(span => span.props.children);
    expect(texts).to.eql(["Hello, ", "Monkey", "!"]);
  });
});
