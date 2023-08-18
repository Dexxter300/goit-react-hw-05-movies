import { Link, useLocation } from 'react-router-dom';
import css from './trends.module.css';

export const Trends = ({ trends }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <ul className={css.ul}>
      {trends.map(movie => {
        if (movie.title) {
          return (
            <li className={css.li} key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                className={css.link}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          );
        }
        // if (movie.name) {
        return (
          <li className={css.li} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.link}
              state={{ from: location }}
            >
              {movie.name}
            </Link>
          </li>
        );
        // }
        // return;
      })}
    </ul>
  );
};
