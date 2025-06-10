import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Candidates with Creative &</h1>
      <h1>Engineering Backgrounds </h1>
      <p>This is the place to show yourself and land entry-level jobs at cutting-edge companies. Launch </p>
      <p>your career here.</p>
      <button>Join now</button>
      <span>
        Looking for candidate’s?
        <a className={styles.hireNow}> Hire now</a>
      </span>
    </section>
  );
};

export default Hero;