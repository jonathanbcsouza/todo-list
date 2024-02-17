type TInput = {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: TInput) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="add a todo..."
      className={`text-center p-2 rounded bg-neutral-700`}
      autoFocus
      onChange={onChange}
    />
  );
};
