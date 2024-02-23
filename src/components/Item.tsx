import { TTodos } from '../App';
import { useToggleStatus } from '../hooks/useToggleStatus';

type TItem = {
  id: number;
  value: string;
  status: boolean;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Item = ({ id, status, value, setItems }: TItem) => {
  const toggleStatus = useToggleStatus(setItems, id);

  return (
    <div
      className={`col-span-6 flex items-center justify-center cursor-pointer ${
        status ? 'line-through text-gray-500' : 'text-gray-300'
      } transition-colors duration-150 ease-in-out`}
      onClick={toggleStatus}
    >
      {value}
    </div>
  );
};
