import React from 'react';
import styles from './Cta.module.css';
import { Link } from 'react-router-dom'

const Cta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h2>Set up your profile. <br /> Let jobs find you.</h2>
          <Link to="*"><button>Join now</button></Link>
        </div>
        <img src="./img/Rectangle15.png" alt="CTA Image" className={styles.ctaImage} />
      </div>
    </section>
  );
};

export default Cta;