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
      className={`col-span-6 flex items-center justify-center cursor-pointer  hover:text-blue-500 hover:text-2xl rounded transition-colors duration-50 ease-in-out ${
        status ? 'line-through text-gray-500' : 'text-gray-300'
      }`}
      onClick={toggleStatus}
    >
      {value}
    </div>
  );
};
