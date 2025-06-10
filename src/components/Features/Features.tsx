import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h4>Professional Profile</h4>
        <p>
          We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter
        </p>
      </div>
      <div className={styles.feature}>
        <h4>Best Portfolio</h4>
        <p>
          We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter
        </p>
      </div>
      <div className={styles.feature}>
        <h4>Powerful Resume</h4>
        <p>
          We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by
        </p>
      </div>
    </section>
  );
};

export default Features;