import { Dispatch, SetStateAction } from 'react';
import { FiCheck } from 'react-icons/fi';

type TCheckbox = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

export const Checkbox = ({ isChecked, setIsChecked }: TCheckbox) => (
  <div>
    <input
      id="checkbox"
      type="checkbox"
      className="hidden"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
    <label
      htmlFor="checkbox"
      className={`w-6 h-6 rounded ${
        isChecked ? 'bg-blue-500 ' : 'bg-gray-700 '
      } cursor-pointer flex justify-center items-center transition duration-200 ease-in-out`}
    >
      {isChecked && <FiCheck className=" text-gray-800" />}
    </label>
  </div>
);
