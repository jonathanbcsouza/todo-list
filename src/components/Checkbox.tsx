import { Dispatch, SetStateAction } from 'react';
import { FiCheck } from 'react-icons/fi';
import { TTodos } from '../App';
import { useToggleStatus } from '../hooks/useToggleStatus';

type TCheckbox = {
  id: number;
  status: boolean;
  setItems: Dispatch<SetStateAction<TTodos[]>>;
};

export const Checkbox = ({ id, status, setItems }: TCheckbox) => {
  const toggleStatus = useToggleStatus(setItems, id);

  return (
    <div className="col-span-2 flex items-center">
      <input id={id.toString()} type="checkbox" className="hidden" checked={status} readOnly />
      <label
        htmlFor={id.toString()}
        className={`w-6 h-6 rounded ${
          status ? 'bg-blue-500' : 'bg-neutral-700 '
        } cursor-pointer flex justify-center items-center transition duration-150 ease-in-out`}
        onClick={toggleStatus}
      >
        {status && <FiCheck className=" text-neutral-700" />}
      </label>
    </div>
  );
};
