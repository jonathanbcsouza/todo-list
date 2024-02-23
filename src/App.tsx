import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';
import { ClearAllTodosBtn } from './components/ClearAllTodosBtn';
import { ClearSelectedTodosBtn } from './components/ClearSelectedTodosBtn';

export type TTodos = {
  id: number;
  value: string;
  status: boolean;
};

export const App = () => {
  const [items, setItems] = useState<TTodos[]>(() => {
    return JSON.parse(localStorage.getItem('items') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main className=" flex justify-center font-sans mt-8 lg:mt-20">
      <div>
        <header>
          <h1 className="text-xl font-bold mb-4">My Todo List</h1>
        </header>
        <section className="w-80">
          <AddTodo setItems={setItems} />
          {[...items].reverse().map((item) => (
            <Todo key={item.id} id={item.id} value={item.value} status={item.status} setItems={setItems} />
          ))}

          {items.length === 0 ? (
            <div className="mt-8">
              <p className="text-gray-500">You don't have any tasks.</p>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <ClearAllTodosBtn setItems={setItems} />
              <ClearSelectedTodosBtn setItems={setItems} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
};
