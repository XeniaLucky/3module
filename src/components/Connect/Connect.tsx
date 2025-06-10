import React from 'react';
import styles from './Connect.module.css';

const Connect: React.FC = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.connectContent}>
        <img src="./img/Frame.png" alt="Connect with Recruiter" />
        <div className={styles.connectText}>
          <h2>Connect With Recruiter</h2>
          <p>Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!</p>
        </div>
      </div>
    </section>
  );
};

export default Connect;