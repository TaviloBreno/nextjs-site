'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCity, faAward } from '@fortawesome/free-solid-svg-icons';
import { StatItem } from '@/types/property';
import styles from './Stats.module.css';

const Stats = () => {
  const stats: StatItem[] = [
    {
      icon: 'home',
      value: '10.000+',
      label: 'Imóveis Disponíveis'
    },
    {
      icon: 'users',
      value: '5.000+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: 'city',
      value: '50+',
      label: 'Cidades Atendidas'
    },
    {
      icon: 'award',
      value: '15',
      label: 'Anos de Experiência'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return faHome;
      case 'users':
        return faUsers;
      case 'city':
        return faCity;
      case 'award':
        return faAward;
      default:
        return faHome;
    }
  };

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <FontAwesomeIcon 
                icon={getIcon(stat.icon)} 
                className={styles.statIcon}
              />
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;