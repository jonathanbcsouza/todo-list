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

  const labelClassNames = `w-6 h-6 rounded ${
    isChecked ? 'bg-blue-500 ' : 'bg-gray-700 '
  } cursor-pointer flex justify-center items-center transition duration-200 ease-in-out`;

  return (
    <div>
      <input id={id} type="checkbox" className="hidden" checked={isChecked} readOnly />
      <label htmlFor={id} className={labelClassNames} onClick={handleInputChange}>
        {isChecked && <FiCheck className=" text-gray-800" />}
      </label>
    </div>
  );
};