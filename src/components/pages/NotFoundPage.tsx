import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.nf}>404 - Page Not Found</h1>
      <p className={styles.nftext}>The page you are looking for does not exist.</p>
      <button className={styles.gohome}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Go back to the home page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;