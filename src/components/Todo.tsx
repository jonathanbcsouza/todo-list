import { DelButton } from './DelButton';
import { Input } from './Input';

type TTodo = {
  id: number;
  item: string;
};

export const Todo = ({ id, item }: TTodo) => {
  return (
    <div id={id.toString()} className="m-1 flex">
      <Input value={item} />
      <DelButton id={id.toString()} />
    </div>
  );
};
