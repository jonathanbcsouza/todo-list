type TItem = {
  id: number;
  isChecked: boolean;
  value: string;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Item = ({ isChecked, value, setIsChecked }: TItem) => {
  return (
    <div
      className={`col-span-6 flex items-center justify-center cursor-pointer hover:bg-neutral-700 rounded transition-colors duration-150 ease-in-out ${
        isChecked ? 'line-through text-gray-500' : 'text-gray-300'
      }`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {value}
    </div>
  );
};
