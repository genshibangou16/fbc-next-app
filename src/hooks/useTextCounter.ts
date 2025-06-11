import { useState } from "react";

export default function useTextCounter(initialValue: string = "") {
  const [text, setText] = useState(initialValue);

  const handleChange = (value: string) => {
    setText(value);
  };

  const getCount = () => {
    return text.length;
  };

  return {
    text,
    handleChange,
    getCount,
  };
}
