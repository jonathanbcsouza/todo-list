import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';

export type TTodos = {
  id: number;
  value: string;
};

export const App = () => {
  const [items, setItems] = useState<TTodos[]>(() => {
    return JSON.parse(localStorage.getItem('items') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main className="font-sans flex flex-col items-center mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 2xl:mt-44">
      <header>
        <h1 className="text-xl font-bold mb-4">Todo List</h1>
      </header>
      <section>
        <AddTodo setItems={setItems} />
        {[...items].reverse().map((item) => (
          <Todo key={item.id} id={item.id} item={item.value} setItems={setItems} />
        ))}
      </section>
    </main>
  );
};
