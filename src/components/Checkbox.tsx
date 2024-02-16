import { Dispatch, SetStateAction } from 'react';

type CheckboxProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

export const Checkbox = ({ isChecked, setIsChecked }: CheckboxProps) => (
  <div className="relative">
    <input type="checkbox" className="hidden" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
  </div>
);
