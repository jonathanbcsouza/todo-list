import { TTodos } from '../App';
import { Checkbox } from './Checkbox';
import { DelButton } from './DelButton';
import { Item } from './Item';

type TTodo = {
  id: number;
  value: string;
  status: boolean;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Todo = ({ id, value, status, setItems }: TTodo) => {
  return (
    <label id={id.toString()} className="grid grid-cols-10 gap-3 h-12 my-8">
      <Checkbox id={id} status={status} setItems={setItems} />
      <Item id={id} value={value} status={status} setItems={setItems} />
      <DelButton id={id} setItems={setItems} />
    </label>
  );
};
