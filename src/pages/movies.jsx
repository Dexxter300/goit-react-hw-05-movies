import { findMovieByName } from 'components/api';
import { Trends } from 'components/trends/trends';
import { useSearchParams } from 'react-router-dom';
import css from './movies.module.css';

const { useEffect, useState } = require('react');

const Movie = () => {
  const [result, setResult] = useState('');
  const [params, setParams] = useSearchParams();
  const inputValue = params.get('name') ?? '';
  useEffect(() => {
    // console.log(inputValue);
    findMovieByName(inputValue).then(res => {
      //   console.log(res);
      if (res.total_results === 0) {
        setResult('');
        return;
      }
      setResult(res.results);
    });
  }, [inputValue]);

  const handleChange = e => {
    const name = e.target.value;
    const nextParams = name !== '' ? { name } : {};
    setParams(nextParams);
    // console.log(e.target.value);
  };
  return (
    <div>
      <h1 className={css.title}>Find movie</h1>
      <input
        type="text"
        className={css.input}
        value={inputValue}
        onChange={handleChange}
      ></input>
      {result && <Trends trends={result} />}
    </div>
  );
};

export default Movie;
