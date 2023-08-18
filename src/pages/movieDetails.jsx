import { findMovie } from 'components/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  console.log(location);
  const backdropLink = useRef(location.state?.from ?? '/');
  console.log(backdropLink);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState('');
  // const currentMovie = findMovie(id);
  useEffect(() => {
    findMovie(id)
      .then(res => {
        if (res.success === false) {
          return Promise.reject(new Error('someting went wrong'));
        }
        // console.log(res);
        setCurrentMovie(res);
      })
      .catch(error => alert(error));
  }, [id]);

  // console.log(currentMovie);
  return (
    <div>
      <div>
        <Link to={backdropLink.current} className={css.link}>
          Go back
        </Link>
        <h1 className={css.title}>{currentMovie.title}</h1>
        <img
          src={
            currentMovie.poster_path
              ? [`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`]
              : defaultImg
          }
          width={250}
          height={375}
          className={css.poster}
          alt="poster"
        />
        <p className={css.text}>User Score: {currentMovie.vote_average}</p>
        <div>
          <h2 className={css.title}>Overview</h2>
          <p className={css.text}>{currentMovie.overview}</p>
        </div>
        <div>
          <h2 className={css.title}>Gernes</h2>
          <ul className={css.list}>
            {currentMovie &&
              currentMovie.genres.map(gerne => {
                return (
                  <li className={css.li} key={gerne.id}>
                    {gerne.name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <h2 className={css.title}>Addtional info</h2>
          <ul className={css.list}>
            <li>
              <Link to="cast" className={css.link}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={css.link}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
