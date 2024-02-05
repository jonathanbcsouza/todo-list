type TButton = {
  id: string;
  item?: string;
};

export const DelButton = ({ id }: TButton) => {
  const onClick = () => {
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    const updatedItems = items.filter((item: { id: string }) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    
    const divElement = document.getElementById(`${id}`) as HTMLDivElement;
    divElement.remove();
  };

  return (
    <button
      onClick={onClick}
      className={`bg-red-900 hover:bg-red-700 text-sm font-semibold ml-2 py-2 px-4 rounded transition duration-200 ease-in-out`}
    >
      X
    </button>
  );
};
