import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';

type TTodos = {
  id: number;
  value: string;
};

export const App = () => {
  const [items, setItems] = useState<TTodos[]>([]);
  const [reRenderTrigger, setReRenderTrigger] = useState<string[]>([]);

  function updateScreen() {
    setReRenderTrigger([]);
  }

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(localStorageItems);
  }, [reRenderTrigger]);

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen px-16">
      <p className="text-xl font-bold mb-4">Todo List</p>

      <AddTodo reRender={updateScreen} />
      {items.map((item) => (
        <Todo key={item.id} id={item.id} item={item.value} />
      ))}
    </div>
  );
};
