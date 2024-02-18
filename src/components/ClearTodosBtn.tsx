import { TTodos } from '../App';

type TClearTodosBtn = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const ClearTodosBtn = ({ setItems }: TClearTodosBtn) => {
  return (
    <button
      onClick={() => {
        setItems([]);
      }}
      className="w-1/3 bg-neutral-700 hover:bg-red-900 text-gray-300 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
    >
      Clear All
    </button>
  );
};
