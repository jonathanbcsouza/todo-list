type TInput = {
  value: string;
};

export const Input = ({ value }: TInput) => {
  return <input type="text" value={value} className={`text-center p-2 rounded 'cursor-not-allowed' }`} disabled />;
};
