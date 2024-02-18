type TInput = {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: TInput) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Create a new todo..."
      className={'col-span-8 text-center bg-neutral-700 rounded  border-gray-400'}
      autoFocus
      onChange={onChange}
    />
  );
};
