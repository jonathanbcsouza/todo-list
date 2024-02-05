import { v4 as uuidv4 } from 'uuid';

type TAddTodo = {
  reRender: () => void;
};

export const AddTodo = ({ reRender }: TAddTodo) => {
  const onClick = () => {
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    const inputElement = document.getElementById(`input-add`) as HTMLInputElement;

    const newItem = {
      id: uuidv4(),
      value: `${inputElement.value}`,
    };

    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    inputElement.value = '';

    reRender();
  };

  return (
    <div className="m-1">
      <input id={`input-add`} type="text" className={`text-center p-2 rounded}`} autoFocus />
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
