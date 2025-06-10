import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.zaglovok}>
        <Link to="/"><img src="./img/logo_2.png" alt="logo image" className={styles.logo} /></Link>
          <a>Jobly</a> 
      </div>
      <nav>
        <Link to="/cards">For Recruiters</Link>
        <button className={styles.login} onClick={openModal}>Sign Up</button>
        <Link to="*">Log in</Link>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;