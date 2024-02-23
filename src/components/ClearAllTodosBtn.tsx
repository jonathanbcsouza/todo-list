import { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';
import { TTodos } from '../App';

type TClearTodosBtn = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
};

export const ClearAllTodosBtn = ({ setItems }: TClearTodosBtn) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-sm text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
      >
        Clear All
      </button>
      {showModal && <ConfirmationModal setItems={setItems} onClose={() => setShowModal(false)} />}
    </>
  );
};
