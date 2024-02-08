type TInputTypes = 'new-todo' | 'todo';

type TInput = {
  value: string;
  type: TInputTypes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, type, onChange }: TInput) => {
  const inputClasses = type === 'todo' ? 'cursor-not-allowed bg-neutral-800' : 'bg-neutral-700';

  return (
    <input
      type="text"
      value={value}
      placeholder="add a todo..."
      className={`text-center p-2 rounded ${inputClasses}`}
      disabled={type === 'todo'}
      autoFocus={type === 'new-todo'}
      onChange={onChange}
    />
  );
};
