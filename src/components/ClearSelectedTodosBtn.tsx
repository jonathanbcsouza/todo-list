import React from 'react';
import { TTodos } from '../App';

type TClearSelectedTodosBtn = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const ClearSelectedTodosBtn = ({ setItems }: TClearSelectedTodosBtn) => {
  const handleClick = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.status));
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
    >
      Clear Selected
    </button>
  );
};
