'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>
              <FontAwesomeIcon icon={faHome} className={styles.logoIcon} />
              ImóvelPrime
            </h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                Início
              </Link>
            </li>
            <li>
              <Link href="/#properties">
                Imóveis
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contatos">
                Contatos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;