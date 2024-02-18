import { useState } from 'react';
import { TTodos } from '../App';
import { Checkbox } from './Checkbox';
import { DelButton } from './DelButton';

type TTodo = {
  id: number;
  value: string;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Todo = ({ id, value, setItems }: TTodo) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div id={id.toString()} className="m-2 flex items-center">
      <label className="flex items-center mt-2 space-x-4">
        <div
          className={`w-44 text-center p-2 rounded cursor-pointer bg-neutral-800 ${
            isChecked ? 'line-through text-gray-400' : 'text-gray'
          }`}
          onClick={() => setIsChecked(!isChecked)}
        >
          {value}
        </div>
        <input id={id.toString()} type="checkbox" className="hidden" checked={isChecked} readOnly />

        <Checkbox id={id.toString()} isChecked={isChecked} setIsChecked={setIsChecked} />
        <DelButton id={id} setItems={setItems} />
      </label>
    </div>
  );
};
