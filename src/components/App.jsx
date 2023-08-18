import Layout from 'components/layout/Layout';
// import Home from 'pages/home';
// import MovieDetails from 'pages/movieDetails';
import { Route, Routes } from 'react-router-dom';
// import Cast from './cast/cast';
// import Reviews from './reviews/reviews';
// import Movie from 'pages/movies';
import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Movie = lazy(() => import('pages/movies'));
const Cast = lazy(() => import('./cast/cast'));
const MovieDetails = lazy(() => import('pages/movieDetails'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
