'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import PropertyCard from '@/components/PropertyCard/PropertyCard';
import Stats from '@/components/Stats/Stats';
import Footer from '@/components/Footer/Footer';
import { Property, SearchFilters } from '@/types/property';
import { mockProperties } from '@/data/properties';

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [searchNotification, setSearchNotification] = useState<string>('');

  const handleSearch = (filters: SearchFilters) => {
    let message = 'Buscando imóveis';
    
    if (filters.city) message += ` em ${getDisplayCity(filters.city)}`;
    if (filters.type) message += ` do tipo ${filters.type}`;
    if (filters.priceRange) message += ` na faixa ${getDisplayPriceRange(filters.priceRange)}`;
    
    setSearchNotification(message + '...');
    
    // Filter properties
    const filtered = mockProperties.filter(property => {
      let matches = true;
      
      if (filters.city && property.city !== filters.city) {
        matches = false;
      }
      
      if (filters.type && property.type !== filters.type) {
        matches = false;
      }
      
      if (filters.priceRange && !isPriceInRange(property.price, filters.priceRange)) {
        matches = false;
      }
      
      return matches;
    });
    
    setFilteredProperties(filtered);
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setSearchNotification('');
    }, 3000);
    
    // Reset filters after 5 seconds for demonstration
    setTimeout(() => {
      setFilteredProperties(mockProperties);
    }, 5000);
  };

  const handleViewDetails = (property: Property) => {
    alert(`Abrindo detalhes do imóvel: ${property.title}\n\nEm um site real, isso redirecionaria para uma página com mais informações, fotos, localização no mapa, etc.`);
  };

  const handleViewAll = () => {
    alert('Redirecionando para página com todos os imóveis disponíveis...');
  };

  const getDisplayCity = (cityValue: string) => {
    const cities: { [key: string]: string } = {
      'sao-paulo': 'São Paulo',
      'rio-janeiro': 'Rio de Janeiro',
      'belo-horizonte': 'Belo Horizonte',
      'brasilia': 'Brasília',
      'salvador': 'Salvador',
      'fortaleza': 'Fortaleza',
      'curitiba': 'Curitiba',
      'recife': 'Recife'
    };
    return cities[cityValue] || cityValue;
  };

  const getDisplayPriceRange = (priceRange: string) => {
    const ranges: { [key: string]: string } = {
      '0-200000': 'até R$ 200.000',
      '200000-400000': 'R$ 200.000 - R$ 400.000',
      '400000-600000': 'R$ 400.000 - R$ 600.000',
      '600000-800000': 'R$ 600.000 - R$ 800.000',
      '800000-1000000': 'R$ 800.000 - R$ 1.000.000',
      '1000000+': 'acima de R$ 1.000.000'
    };
    return ranges[priceRange] || priceRange;
  };

  const isPriceInRange = (price: number, range: string) => {
    switch(range) {
      case '0-200000':
        return price <= 200000;
      case '200000-400000':
        return price >= 200000 && price <= 400000;
      case '400000-600000':
        return price >= 400000 && price <= 600000;
      case '600000-800000':
        return price >= 600000 && price <= 800000;
      case '800000-1000000':
        return price >= 800000 && price <= 1000000;
      case '1000000+':
        return price >= 1000000;
      default:
        return true;
    }
  };

  return (
    <div>
      <Header />
      <Hero onSearch={handleSearch} />
      
      {/* Search Notification */}
      {searchNotification && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#2c5aa0',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '5px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
          zIndex: 1001
        }}>
          🔍 {searchNotification}
        </div>
      )}
      
      {/* Featured Properties */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }} id="properties">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            color: '#333', 
            marginBottom: '3rem' 
          }}>
            Imóveis em Destaque
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {filteredProperties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={handleViewAll}
              style={{
                background: 'transparent',
                color: '#2c5aa0',
                border: '2px solid #2c5aa0',
                padding: '12px 30px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#2c5aa0';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#2c5aa0';
              }}
            >
              Ver Todos os Imóveis
            </button>
          </div>
        </div>
      </section>
      
      <Stats />
      <Footer />
    </div>
  );
}
