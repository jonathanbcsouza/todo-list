import { TTodos } from '../App';
import { DelButton } from './DelButton';
import { Input } from './Input';

type TTodo = {
  id: number;
  item: string;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Todo = ({ id, item, setItems }: TTodo) => {
  return (
    <div id={id.toString()} className="m-1 flex">
      <Input value={item} type='todo' />
      <DelButton id={id} setItems={setItems} />
    </div>
  );
};
