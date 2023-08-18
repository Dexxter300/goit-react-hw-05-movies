import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ReviewItem } from 'components/reviewItem/reviewItem';
import css from './reviews.module.css';

const { getReviews } = require('components/api');
const { useEffect } = require('react');

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pendding');
    getReviews(id)
      .then(res => {
        if (res.success === false) {
          setStatus('rejected');
          return Promise.reject(new Error('someting went wrong'));
        }
        console.log(res);

        setReviews(res);
        setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, []);

  //   if (reviews.results.length === 0) {
  //     return <div>We don't have any reviews yet</div>;
  //   }
  // if (status === 'pendding') {
  //   return <div>Loading...</div>;
  // }
  if (status === 'resolved') {
    if (reviews.results.length === 0) {
      return <div className={css.bad}>We don't have any reviews yet</div>;
    }
    return (
      <ul className={css.list}>
        {reviews &&
          reviews.results.map(el => {
            return <ReviewItem key={el.id} el={el} />;
          })}
      </ul>
    );
  }

  if (status === 'rejected') {
    return <div>someting went wrong</div>;
  }
};

export default Reviews;
