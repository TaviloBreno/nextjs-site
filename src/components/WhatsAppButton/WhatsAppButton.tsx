'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTimes } from '@fortawesome/free-brands-svg-icons';
import { faTimes as faTimesRegular } from '@fortawesome/free-solid-svg-icons';
import styles from './WhatsAppButton.module.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = '5585987654321', // Número aleatório do Ceará
  message = 'Olá! Gostaria de mais informações sobre os imóveis disponíveis.' 
}: WhatsAppButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Botão Principal */}
      <div className={styles.whatsappButton} onClick={toggleExpanded}>
        <FontAwesomeIcon 
          icon={isExpanded ? faTimesRegular : faWhatsapp} 
          className={styles.icon}
        />
      </div>

      {/* Menu Expandido */}
      {isExpanded && (
        <div className={styles.expandedMenu}>
          <div className={styles.menuHeader}>
            <div className={styles.avatar}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className={styles.info}>
              <h4>Imóvel Prime</h4>
              <p>Online agora</p>
            </div>
          </div>
          
          <div className={styles.menuBody}>
            <p>Olá! 👋</p>
            <p>Como podemos ajudar você hoje?</p>
            <p>Estamos aqui para esclarecer suas dúvidas sobre nossos imóveis!</p>
          </div>
          
          <div className={styles.menuFooter}>
            <button 
              className={styles.chatButton}
              onClick={handleWhatsAppClick}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Iniciar Conversa
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isExpanded && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}