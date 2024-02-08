type TInputTypes = 'new-todo' | 'todo';

type TInput = {
  value: string;
  type: TInputTypes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, type, onChange }: TInput) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="add a todo..."
      className={`text-center p-2 rounded 'cursor-not-allowed'`}
      disabled={type === 'todo'}
      autoFocus={type === 'new-todo'}
      onChange={onChange}
    />
  );
};
