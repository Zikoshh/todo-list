import Card from '../Card';
import s from './index.module.css';

const Cards = ({ todos, handleDeleteTodo }) => {
  return (
    <ul className={s.cards}>
      {todos?.length ? (
        todos.map((todo, i) => {
          return (
            <Card
              key={i}
              title={todo.title}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })
      ) : (
        <h3 className={s.title}>Нету задач</h3>
      )}
    </ul>
  );
};

export default Cards;
