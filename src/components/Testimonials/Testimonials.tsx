import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <img src="./img/Ellipse.png" alt="Testimonial" />
      <blockquote>
        Creating an Online Presence is Hard.
      </blockquote>
      <blockquote>
        Jobly Makes it Easy for Recruiters to See you
      </blockquote>
      <p className={styles.author}>Zhao Cui</p>
      <p className={styles.role}>Founder at Jobly.co</p>
    </section>
  );
};

export default Testimonials;