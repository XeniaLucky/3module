import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'

export interface CardData {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  imageUrl: string;
  title: string;
  aboutMe: string;
}

const Card: React.FC<{ cardData: CardData }> = ({ cardData }) => {
  
  const { name, email, phone, address, imageUrl, title, aboutMe } = cardData;
  
  return (
    <div className={styles.container}>
        <div className={styles.backgroundImage}></div>
        <div id="cards-container">
            <div className={styles.profileContent}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileMain}>
                        <img id="profile-image" src={imageUrl} alt="Profile Picture" />
                        <div className={styles.profileDetails}>
                            <h1 id="profile-name">{name}</h1>
                            <p id="profile-title">{title}</p>
                            <p id="profile-location">{address.city}, USA · Fulltime Freelancer</p>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <Link to="*"><button className={styles.skillButton}>Figma</button></Link>
                        <Link to="*"><button className={styles.skillButton}>UI Design</button></Link>
                        <Link to="*"><button className={styles.skillButton}>UX Design</button></Link>
                    </div>
                </div>
                <hr className={styles.profileSeparator} />
                <div className={styles.contentRow}>
                    <div className={styles.aboutMe}>
                        <h2>About Me</h2>
                        <p id="about-me-text">{aboutMe}</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <img src="./img/email.png" className={styles.contactIcon} alt="Email Icon" />
                            <p className={styles.contactText}>Email</p>
                            <span id="contact-email">{email}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <img src="./img/phone.png" className={styles.contactIcon} alt="Phone Icon" />
                            <p className={styles.contactText}>Phone number</p>
                            <span id="contact-phone">{phone}</span>
                        </div>
                        <Link to="*"><button className={`${styles.contactButton} ${styles.downloadResume}`}>Download Resume</button></Link>
                        <Link to="*"><button className={`${styles.contactButton} ${styles.message}`}>Message</button></Link>
                    </div>
                    <div className={styles.portfolio}>
                        <h2>Portfolio</h2>
                        <div className={styles.portfolioGrid}>
                            <div className={styles.portfolioItem}>
                                <img src="img/card_1.png" alt="Portfolio Item 1" />
                            </div>
                            <div className={styles.portfolioItem}>
                                <img src="img/card_2.png" alt="Portfolio Item 2" />
                            </div>
                            <div className={styles.portfolioItem}>
                                <img src="img/card_3.png" alt="Portfolio Item 3" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.workExperience}>
                        <h2>Work Experience</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;