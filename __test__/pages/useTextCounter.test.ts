import { act, renderHook } from "@testing-library/react";
import useTextCounter from "@/hooks/useTextCounter";

describe("useTextCounter", () => {
  it("should initialize with default value", () => {
    const { result } = renderHook(() => useTextCounter());
    expect(result.current.text).toBe("");
  });

  it("should initialize with custom value", () => {
    const initialValue = "Initial text";
    const { result } = renderHook(() => useTextCounter(initialValue));
    expect(result.current.text).toBe(initialValue);
  });

  it("should update text on handleChange", () => {
    const { result } = renderHook(() => useTextCounter());
    const newText = "Hello, World!";

    act(() => {
      result.current.handleChange(newText);
    });

    expect(result.current.text).toBe(newText);
  });

  it("should return correct count from getCount", () => {
    const { result } = renderHook(() => useTextCounter());
    const newText = "Hello, World!";

    act(() => {
      result.current.handleChange(newText);
    });

    expect(result.current.getCount()).toBe(newText.length);
  });
});
