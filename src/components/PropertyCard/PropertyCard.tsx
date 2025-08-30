'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import { Property } from '@/types/property';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyImage}>
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={400}
          height={300}
          className={styles.image}
        />
        {property.badge && (
          <div className={styles.propertyBadge}>{property.badge}</div>
        )}
      </div>
      <div className={styles.propertyInfo}>
        <h3>{property.title}</h3>
        <p className={styles.propertyLocation}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
          {property.location}
        </p>
        <div className={styles.propertyFeatures}>
          <span>
            <FontAwesomeIcon icon={faBed} className={styles.featureIcon} />
            {property.bedrooms} quartos
          </span>
          <span>
            <FontAwesomeIcon icon={faBath} className={styles.featureIcon} />
            {property.bathrooms} banheiros
          </span>
          <span>
            <FontAwesomeIcon icon={faCar} className={styles.featureIcon} />
            {property.parkingSpaces} vaga{property.parkingSpaces !== 1 ? 's' : ''}
          </span>
        </div>
        <div className={styles.propertyPrice}>{formatPrice(property.price)}</div>
        <button 
          className={styles.btnDetails}
          onClick={() => onViewDetails(property)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;