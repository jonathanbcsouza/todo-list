import { TTodos } from '../App';

type TConfirmationModal = {
  setItems: React.Dispatch<React.SetStateAction<TTodos[]>>;
  onClose: () => void;
};

export const ConfirmationModal = ({ setItems, onClose }: TConfirmationModal) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center lg:items-start lg:pt-8 bg-black bg-opacity-50">
      <div className="bg-neutral-800 text-gray-200 p-8 lg:w-1/3 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Are you sure?</h2>
        <p className="mb-10">This will permanently delete all your todos.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => onClose()}
            className="bg-neutral-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setItems([]);
              onClose();
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};
