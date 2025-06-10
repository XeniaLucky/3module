import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Jobly.co</strong><br />
        We support a pool of diverse young creatives and engineers.<br />
        <strong>© 2023 Jobly.co Copyright and All rights reserved.</strong>
      </div>
      <div className={styles.copyright}>
        <Link to="*">Terms and Conditions</Link> · <Link to="*">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;