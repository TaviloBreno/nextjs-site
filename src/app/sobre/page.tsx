'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHome, faAward, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Sobre() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%)',
        color: 'white',
        padding: '6rem 0 4rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Sobre a Imóvel Prime
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Há mais de 15 anos conectando pessoas aos seus lares dos sonhos
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '2rem' }}>
                Nossa História
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1.5rem' }}>
                A Imóvel Prime nasceu em 2008 com o sonho de revolucionar o mercado imobiliário brasileiro. 
                Fundada por uma equipe de profissionais apaixonados por arquitetura e negócios, nossa empresa 
                começou como uma pequena corretora em Crateús, Ceará.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1.5rem' }}>
                Ao longo dos anos, expandimos nossa atuação para diversas cidades do Brasil, sempre mantendo 
                nosso compromisso com a excelência no atendimento e a transparência em todas as negociações.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                Hoje, somos referência no mercado imobiliário, com mais de 5.000 imóveis vendidos e 
                milhares de famílias realizando o sonho da casa própria.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <FontAwesomeIcon icon={faHome} style={{ fontSize: '4rem', color: '#2c5aa0', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>15+ Anos</h3>
                <p style={{ color: '#666' }}>de experiência no mercado imobiliário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#333', marginBottom: '3rem' }}>
            Nossos Valores
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faHandshake} style={{ fontSize: '3rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Transparência</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Acreditamos que a honestidade e clareza são fundamentais para construir relacionamentos duradouros.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faAward} style={{ fontSize: '3rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Excelência</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Buscamos sempre superar expectativas, oferecendo o melhor serviço e as melhores oportunidades.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: '3rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Compromisso</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Nosso compromisso é com você e sua família, ajudando a realizar o sonho do lar perfeito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2c5aa0', marginBottom: '1rem' }}>Nossa Missão</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Facilitar a realização do sonho da casa própria, conectando pessoas aos imóveis ideais 
                através de um atendimento personalizado e soluções inovadoras.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2c5aa0', marginBottom: '1rem' }}>Nossa Visão</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Ser a principal referência no mercado imobiliário brasileiro, reconhecida pela qualidade 
                dos serviços e pela satisfação dos clientes.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2c5aa0', marginBottom: '1rem' }}>Nossos Valores</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Ética, transparência, compromisso com a excelência, inovação constante e foco total 
                na satisfação e realização dos sonhos dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}