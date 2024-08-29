import s from './index.module.css';

const Form = ({ query, setQuery }) => {
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className={s.form}>
      <input
        className={s.input_query}
        value={query}
        onChange={handleQuery}
        placeholder='Поиск'
      />
    </form>
  );
};

export default Form;
