import { Suspense } from 'react';
import css from './layout.module.css';

const { Outlet, Link } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className={css.link}>
            HOME
          </Link>
          <Link to="/movies" className={css.link}>
            MOVIES
          </Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
