import { v4 as uuidv4 } from 'uuid';
import { TTodos } from '../App';
import { Input } from './Input';

type AddTodo = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const AddTodo = ({ setItems }: AddTodo) => {
  const onClick = () => {
    const inputElement = document.querySelector('input') as HTMLInputElement;

    if (!inputElement.value) {
      return;
    }

    const updatedTodos: TTodos = {
      id: uuidv4() as unknown as number,
      value: `${inputElement.value}`,
    };

    setItems((prevItems: TTodos[]) => [...prevItems, updatedTodos]);
    inputElement.value = '';
  };

  return (
    <div className="m-1 flex">
      <Input type="add" />
      <button
        onClick={onClick}
        type="submit"
        className={`bg-slate-700 hover:bg-slate-400 text-sm font-semibold ml-2 py-2 px-4 rounded transition duration-200 ease-in-out`}
      >
        +
      </button>
    </div>
  );
};
