import { act, renderHook } from "@testing-library/react";
import useTextCounter from "@/hooks/useTextCounter";

describe("useTextCounter", () => {
  it("should initialize with default value", () => {
    const { result } = renderHook(() => useTextCounter());
    expect(result.current.text).toBe("");
  });

  it("should update text on handleChange", () => {
    const { result } = renderHook(() => useTextCounter());
    const newText = "Hello, World!";

    act(() => {
      result.current.handleChange({
        target: { value: newText },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    expect(result.current.text).toBe(newText);
  });

  it("should return correct count from getCount", () => {
    const { result } = renderHook(() => useTextCounter());
    const newText = "Hello, World!";

    act(() => {
      result.current.handleChange({
        target: { value: newText },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    expect(result.current.getCount()).toBe(newText.length);
  });
});
