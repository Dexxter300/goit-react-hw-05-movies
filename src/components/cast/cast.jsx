import { CastItem } from 'components/castItem/castItem';
import { useParams } from 'react-router-dom';
import css from './cast.module.css';

const { getCast } = require('components/api');
const { useEffect, useState } = require('react');

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(id).then(res => {
      setCast(res);
      //   console.log(res);
    });
    //   `https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`;
  }, [id]);
  return (
    <div>
      <ul className={css.list}>
        {cast &&
          cast.cast.map(el => {
            return (
              <CastItem key={el.id} el={el} />
              //   <li key={el.id}>
              //     <h3>{el.name}</h3>
              //     <img
              //       src={
              //         el.profile_path
              //           ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
              //           : defaultImg
              //       }
              //       alt="actor"
              //       width="250"
              //     />
              //     <p>Character: {el.character}</p>
              //   </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
