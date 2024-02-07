import { TTodos } from '../App';

type TButton = {
  id: number;
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const DelButton = ({ id, setItems }: TButton) => {
  const onClick = () => {
    setItems((prevItems: TTodos[]) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <button
      onClick={onClick}
      className={`bg-red-900 hover:bg-red-700 text-sm font-semibold ml-2 py-2 px-4 rounded transition duration-200 ease-in-out`}
    >
      X
    </button>
  );
};
