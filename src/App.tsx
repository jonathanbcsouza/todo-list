import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';
import { ClearTodosBtn } from './components/ClearTodosBtn';

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
    <main className=" flex justify-center font-sans mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 2xl:mt-44">
      <div>
        <header>
          <h1 className="text-xl font-bold mb-4">My Todo List</h1>
        </header>
        <section className="w-80">
          <AddTodo setItems={setItems} />
          {[...items].reverse().map((item) => (
            <Todo key={item.id} id={item.id} value={item.value} setItems={setItems} />
          ))}

          {items.length > 0 ? <ClearTodosBtn setItems={setItems} /> : <p>You don't have any remaining tasks.</p>}
        </section>
      </div>
    </main>
  );
};
