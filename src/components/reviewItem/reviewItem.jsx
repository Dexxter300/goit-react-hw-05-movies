import css from './reviewItem.module.css';

export const ReviewItem = ({ el }) => {
  return (
    <li className={css.card}>
      <h3>{el.author_details.username}</h3>
      <p className={css.text}>{el.content}</p>
      <p className={css.rating}>rating: {el.author_details.rating}</p>
    </li>
  );
};
