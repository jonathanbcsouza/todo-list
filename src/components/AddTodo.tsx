import { useState } from 'react';
import { Input } from './Input';
import { AddButton } from './AddButton';
import { TTodos } from '../App';

type TAddTodo = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const AddTodo = ({ setItems }: TAddTodo) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="m-2 flex">
      <Input value={inputValue} type="new-todo" onChange={handleInputChange} />
      <AddButton inputValue={inputValue} setInputValue={setInputValue} setItems={setItems} />
    </div>
  );
};
