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
      className="mt-4 p-2 bg-red-800 text-white rounded-md"
    >
      Clear All
    </button>
  );
};
