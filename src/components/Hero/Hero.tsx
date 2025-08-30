'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFilters } from '@/types/property';
import styles from './Hero.module.css';

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    city: '',
    type: '',
    priceRange: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h2>Encontre o Imóvel dos Seus Sonhos</h2>
        <p>Mais de 10.000 imóveis disponíveis em todo o Brasil</p>
        
        <div className={styles.searchBox}>
          <h3>Busca Rápida</h3>
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <div className={styles.searchRow}>
              <div className={styles.searchField}>
                <label htmlFor="city">Cidade</label>
                <select 
                  id="city" 
                  name="city"
                  value={filters.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                >
                  <option value="">Selecione a cidade</option>
                  <option value="sao-paulo">São Paulo</option>
                  <option value="rio-janeiro">Rio de Janeiro</option>
                  <option value="belo-horizonte">Belo Horizonte</option>
                  <option value="brasilia">Brasília</option>
                  <option value="salvador">Salvador</option>
                  <option value="fortaleza">Fortaleza</option>
                  <option value="curitiba">Curitiba</option>
                  <option value="recife">Recife</option>
                </select>
              </div>
              
              <div className={styles.searchField}>
                <label htmlFor="type">Tipo</label>
                <select 
                  id="type" 
                  name="type"
                  value={filters.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  <option value="">Tipo do imóvel</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="sobrado">Sobrado</option>
                  <option value="cobertura">Cobertura</option>
                  <option value="terreno">Terreno</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>
              
              <div className={styles.searchField}>
                <label htmlFor="price-range">Faixa de Preço</label>
                <select 
                  id="price-range" 
                  name="price-range"
                  value={filters.priceRange}
                  onChange={(e) => handleInputChange('priceRange', e.target.value)}
                >
                  <option value="">Selecione o valor</option>
                  <option value="0-200000">Até R$ 200.000</option>
                  <option value="200000-400000">R$ 200.000 - R$ 400.000</option>
                  <option value="400000-600000">R$ 400.000 - R$ 600.000</option>
                  <option value="600000-800000">R$ 600.000 - R$ 800.000</option>
                  <option value="800000-1000000">R$ 800.000 - R$ 1.000.000</option>
                  <option value="1000000+">Acima de R$ 1.000.000</option>
                </select>
              </div>
              
              <button type="submit" className={styles.searchBtn}>
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;