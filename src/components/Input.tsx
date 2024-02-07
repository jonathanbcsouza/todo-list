type TInputTypes = 'add' | 'todo';

type TInput = {
  value?: string;
  type: TInputTypes;
};

export const Input = ({ value, type }: TInput) => {
  return (
    <input
      type="text"
      value={value}
      className={`text-center p-2 rounded 'cursor-not-allowed'`}
      autoFocus={type === 'add'}
      placeholder="add a todo..."
      disabled={type === 'todo'}
    />
  );
};
