import { expect } from "chai";
import { add, sub, mul, div } from "../src/add";

describe("Calculator", () => {
  it("can add two numbers", () => {
    expect(add(3, 3)).to.equal(6);
  });

  it("can subtract two numbers", () => {
    const result = sub(2, 4);
    console.log("subtract: ", result);
    expect(sub(3, 1)).to.equal(2);
  });

  it("can multiply two numbers", () => {
    console.log("mul(3,3) = ", mul(3, 3));
    expect(mul(3, 3)).to.equal(9);
  });

  it("can divide two numbers", () => {
    expect(div(3, 3)).to.equal(1);
  });
});
