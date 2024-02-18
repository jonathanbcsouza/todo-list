import { useState, FormEvent } from 'react';
import { Input } from './Input';
import { AddButton } from './AddButton';
import { TTodos } from '../App';
import { v4 as uuidv4 } from 'uuid';

type TAddTodo = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const AddTodo = ({ setItems }: TAddTodo) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (event: FormEvent) => {
    event.preventDefault();

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
    <form onSubmit={handleAdd} className="grid grid-cols-10 gap-3 h-12">
      <Input value={inputValue} onChange={handleInputChange} />
      <AddButton />
    </form>
  );
};
