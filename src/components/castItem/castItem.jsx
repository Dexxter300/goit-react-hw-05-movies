import css from './castItem.module.css';

export const CastItem = ({ el }) => {
  const defaultImg =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  return (
    <li className={css.card}>
      <h3>{el.name}</h3>
      <img
        src={
          el.profile_path
            ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
            : defaultImg
        }
        alt="actor"
        width="250"
        className={css.photo}
      />
      <p className={css.text}>Character: {el.character}</p>
    </li>
  );
};
