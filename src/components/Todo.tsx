import { useState } from 'react';
import { TTodos } from '../App';
import { Checkbox } from './Checkbox';
import { DelButton } from './DelButton';
import { Item } from './Item';

type TTodo = {
  id: number;
  value: string;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Todo = ({ id, value, setItems }: TTodo) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label id={id.toString()} className="grid grid-cols-10 gap-3 h-12 my-8">
      <Checkbox id={id.toString()} isChecked={isChecked} setIsChecked={setIsChecked} />
      <Item id={id} isChecked={isChecked} value={value} setIsChecked={setIsChecked} />
      <DelButton id={id} setItems={setItems} />
    </label>
  );
};
