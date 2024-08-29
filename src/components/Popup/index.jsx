import { useState } from 'react';
import s from './index.module.css';

const Popup = ({ handleClose, handleSubmit }) => {
  const [titleValue, setTitleValue] = useState('');

  const handleStopClose = (e) => {
    e.stopPropagation();
  };

  const handleTitleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(titleValue);
    e.preventDefault();
    handleSubmit(titleValue);
  };

  return (
    <div className={s.overlay} onClick={handleClose}>
      <form className={s.popup} onClick={handleStopClose} onSubmit={onSubmit}>
        <input
          className={s.input_title}
          type='text'
          value={titleValue}
          onChange={handleTitleInput}
          required
        />
        <button className={s.button_submit} type='submit'>
          Добавить
        </button>
        <button className={s.button_close} onClick={handleClose} />
      </form>
    </div>
  );
};

export default Popup;
