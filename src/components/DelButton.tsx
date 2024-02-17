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
      className="hover:text-red-500 active:scale-50 text-gray-400 80w transition duration-300 ease-in-out"
    >
      <FiTrash2 className="w-6 h-6" />
    </button>
  );
};
