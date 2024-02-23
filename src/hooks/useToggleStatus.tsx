import { Dispatch, SetStateAction } from 'react';
import { TTodos } from '../App';

type TUseToggleStatus = (setItems: Dispatch<SetStateAction<TTodos[]>>, id: number) => () => void;

export const useToggleStatus: TUseToggleStatus = (setItems, id) => {
  return () => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, status: !item.status } : item)));
  };
};
