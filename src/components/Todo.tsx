import { TTodos } from '../App';
import { TodoItem } from './TodoItem';

type TTodo = {
  id: number;
  item: string;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Todo = ({ id, item, setItems }: TTodo) => {
  return (
    <div id={id.toString()} className="m-2 flex">
      <TodoItem value={item} type="todo" id={id} setItems={setItems} />
    </div>
  );
};
