import { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import { TTodos } from '../App';

type TClearTodosBtn = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const ClearTodosBtn = ({ setItems }: TClearTodosBtn) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-1/3 bg-neutral-700 hover:bg-red-900 text-gray-300 font-bold py-3 rounded transition duration-300 ease-in-out"
      >
        Clear All
      </button>
      {showModal && <ConfirmationModal setItems={setItems} onClose={() => setShowModal(false)} />}
    </>
  );
};
