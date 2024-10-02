import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("something truthy and falsy", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
