import { TTodos } from '../App';

type TItem = {
  id: number;
  value: string;
  status: boolean;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const Item = ({ id, status, value, setItems }: TItem) => {
  const handleInputChange = () => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, status: !status } : item)));
  };

  return (
    <div
      className={`col-span-6 flex items-center justify-center cursor-pointer hover:bg-neutral-700 rounded transition-colors duration-150 ease-in-out ${
        status ? 'line-through text-gray-500' : 'text-gray-300'
      }`}
      onClick={handleInputChange}
    >
      {value}
    </div>
  );
};
