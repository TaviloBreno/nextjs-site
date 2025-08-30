'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>
              <FontAwesomeIcon icon={faHome} className={styles.logoIcon} />
              ImóvelPrime
            </h3>
            <p>Encontre o imóvel dos seus sonhos com a melhor equipe do mercado.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#">Comprar</a></li>
              <li><a href="#">Alugar</a></li>
              <li><a href="#">Vender</a></li>
              <li><a href="#">Financiamento</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                (11) 9999-9999
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
                contato@imovelprime.com
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 ImóvelPrime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;