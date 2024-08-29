import s from './index.module.css';

const Card = ({ title, handleDeleteTodo }) => {
  const handleDelete = () => {
    handleDeleteTodo(title);
  };

  return (
    <li className={s.card}>
      <h3 className={s.title}>{title}</h3>
      <button className={s.button_delete} onClick={handleDelete} />
    </li>
  );
};

export default Card;
