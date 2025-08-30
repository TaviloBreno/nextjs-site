'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contatos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
      setIsSubmitting(false);
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

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
            Entre em Contato
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Estamos aqui para ajudar você a encontrar o imóvel dos seus sonhos
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '2.5rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '0.5rem' }}>Telefone</h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>(85) 99876-5432</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Segunda a Sexta: 8h às 18h</p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '2.5rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '0.5rem' }}>E-mail</h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>contato@imovelprime.com.br</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Respondemos em até 24h</p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '2.5rem', color: '#2c5aa0', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '0.5rem' }}>Endereço</h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>Crateús - CE</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Centro da cidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Formulário de Contato */}
            <div>
              <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>
                Envie sua Mensagem
              </h2>
              
              {submitMessage && (
                <div style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '1rem',
                  borderRadius: '5px',
                  marginBottom: '2rem',
                  border: '1px solid #c3e6cb'
                }}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    Assunto *
                  </label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="compra">Compra de Imóvel</option>
                    <option value="venda">Venda de Imóvel</option>
                    <option value="aluguel">Aluguel</option>
                    <option value="avaliacao">Avaliação</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting ? '#ccc' : '#2c5aa0',
                    color: 'white',
                    padding: '15px 30px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.3s'
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
            
            {/* Mapa do Google */}
            <div>
              <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>
                Nossa Localização
              </h2>
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.89994832677!2d-40.71461842089844!3d-5.175832999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0aa5d3b3b3b3b%3A0x1234567890abcdef!2sCrate%C3%BAs%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Crateús - CE"
                />
              </div>
              <p style={{ color: '#666', marginTop: '1rem', textAlign: 'center' }}>
                📍 Crateús, Ceará - Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}