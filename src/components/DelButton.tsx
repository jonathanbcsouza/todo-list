import { TTodos } from '../App';
import { FiTrash2 } from 'react-icons/fi';

type TDelButton = {
  id: number;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const DelButton = ({ id, setItems }: TDelButton) => {
  const handleDelete = () => {
    setItems((prevItems: TTodos[]) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <button
      onClick={handleDelete}
      className="flex items-center justify-center col-span-2 text-gray-400 hover:text-red-500 hover:bg-neutral-700 rounded transition-colors duration-150 ease-in-out"
    >
      <FiTrash2 className="w-6 h-6" />
    </button>
  );
};
