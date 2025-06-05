import useTextCounter from "@/hooks/useTextCounter";

export default function TextCounter() {
  const { text, handleChange, getCount } = useTextCounter();

  return (
    <form>
      <textarea
        className="border border-gray-300 p-2 rounded"
        value={text}
        onChange={handleChange}
        rows={10}
        cols={30}
      ></textarea>
      <p>{getCount()}</p>
    </form>
  );
}
