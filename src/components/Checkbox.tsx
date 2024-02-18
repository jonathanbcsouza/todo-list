import { Dispatch, SetStateAction } from 'react';
import { FiCheck } from 'react-icons/fi';

type TCheckbox = {
  id: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

export const Checkbox = ({ id, isChecked, setIsChecked }: TCheckbox) => {
  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="col-span-2 flex items-center">
      <input id={id} type="checkbox" className="hidden" checked={isChecked} readOnly />
      <label
        htmlFor={id}
        className={`w-6 h-6 rounded ${
          isChecked ? 'bg-blue-500' : 'bg-neutral-700 '
        } cursor-pointer flex justify-center items-center transition duration-200 ease-in-out`}
        onClick={handleInputChange}
      >
        {isChecked && <FiCheck className=" text-neutral-700" />}
      </label>
    </div>
  );
};
