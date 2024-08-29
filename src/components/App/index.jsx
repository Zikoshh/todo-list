import { useState, useDeferredValue, useMemo } from 'react';
import Cards from '../Cards';
import Form from '../Form';
import s from './index.module.css';
import Popup from '../Popup';

const App = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [initialTodos, setInitialTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const filteredTodos = useMemo(() => {
    return initialTodos.filter((todo) => {
      return todo.title.toLowerCase().includes(deferredQuery.toLowerCase());
    });
  }, [deferredQuery, initialTodos]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleAddTodo = (title) => {
    setInitialTodos([...initialTodos, { title: title }]);
    localStorage.setItem(
      'todos',
      JSON.stringify([...initialTodos, { title: title }])
    );

    handlePopupClose();
  };

  const handleDeleteTodo = (title) => {
    const newTodos = initialTodos.filter((todo) => {
      return todo.title !== title;
    });

    localStorage.setItem('todos', JSON.stringify(newTodos));
    setInitialTodos(newTodos);
  };

  return (
    <div className={s.main}>
      <Form query={query} setQuery={setQuery} />
      <Cards todos={filteredTodos} handleDeleteTodo={handleDeleteTodo} />
      <button onClick={handlePopupOpen} className={s.button_add}></button>
      {isPopupOpen && (
        <Popup handleClose={handlePopupClose} handleSubmit={handleAddTodo} />
      )}
    </div>
  );
};

export default App;
