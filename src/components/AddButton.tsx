import { TTodos } from '../App';
import { v4 as uuidv4 } from 'uuid';

type TAddButton = {
  inputValue?: string;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const AddButton = ({ inputValue, setItems, setInputValue }: TAddButton) => {
  const handleAdd = () => {
    if (!inputValue) {
      return;
    }

    const newTodo: TTodos = {
      id: uuidv4() as unknown as number,
      value: inputValue,
    };

    setItems((prevItems: TTodos[]) => [...prevItems, newTodo]);
    setInputValue('');
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="bg-slate-700 hover:bg-slate-400 text-sm font-semibold ml-2 py-2 px-4 rounded transition duration-200 ease-in-out"
    >
      +
    </button>
  );
};