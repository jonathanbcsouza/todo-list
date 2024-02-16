import { useState } from 'react';
import { DelButton } from './DelButton';
import { Checkbox } from './Checkbox';
import { TTodos } from '../App';

type TInputTypes = 'new-todo' | 'todo';

type TInput = {
  id: number;
  value: string;
  type: TInputTypes;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const TodoItem = ({ id, value, setItems }: TInput) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <label className="flex items-center mt-2 space-x-4">
        <div
          className={`w-44 text-center p-2 rounded cursor-pointer bg-neutral-800 ${
            isChecked ? 'line-through text-gray-400' : 'text-white'
          }`}
        >
          {value}
        </div>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </label>
      <DelButton id={id} setItems={setItems} />
    </>
  );
};