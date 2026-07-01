import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FadeLeft, FadeRight } from './Animations';
import { siteData } from '../data/siteData';

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

const inputStyle = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '12px',
  padding: '16px 20px',
  color: '#FFFFFF',
  fontSize: '16px',
  fontFamily: "'Poppins', system-ui, sans-serif",
  transition: 'all 0.3s',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  color: 'rgba(255,255,255,0.7)',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '8px',
};

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá, Bruno! Meu nome é ${formData.name}.

Tipo de evento: ${formData.eventType}
Data pretendida: ${formData.date}
Telefone: ${formData.phone}
Email: ${formData.email}

${formData.message}`;

    window.open(
      `https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefone 1', value: siteData.artist.phone1Display, link: `tel:${siteData.artist.phone1}` },
    { icon: Phone, label: 'Telefone 2', value: siteData.artist.phone2Display, link: `tel:${siteData.artist.phone2}` },
    { icon: Mail, label: 'E-mail', value: siteData.artist.email, link: `mailto:${siteData.artist.email}` },
    { icon: MapPin, label: 'Localização', value: `${siteData.artist.region}, ${siteData.artist.city}`, link: null },
  ];

  return (
    <section id="contato" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              Contato
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Vamos{' '}
              <span className="text-gradient-gold">Conversar?</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Entre em contato e transforme seu evento em uma festa inesquecível.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'clamp(32px, 5vw, 64px)' }}>
          {/* Contact Info */}
          <FadeLeft>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-8">
                Entre em Contato
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label + index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="group"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'clamp(12px, 3vw, 20px)',
                          padding: 'clamp(14px, 3vw, 20px)',
                          background: 'rgba(20, 20, 20, 0.6)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(20, 20, 20, 0.6)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                      >
                        <div className="flex items-center justify-center" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', flexShrink: 0 }}>
                          <info.icon style={{ width: '24px', height: '24px', color: '#0A0A0A' }} />
                        </div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontWeight: 500, marginBottom: '2px' }}>{info.label}</div>
                          <div className="font-semibold" style={{ color: '#FFFFFF', fontSize: '18px' }}>{info.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'clamp(12px, 3vw, 20px)',
                          padding: 'clamp(14px, 3vw, 20px)',
                          background: 'rgba(20, 20, 20, 0.6)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <div className="flex items-center justify-center" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', flexShrink: 0 }}>
                          <info.icon style={{ width: '24px', height: '24px', color: '#0A0A0A' }} />
                        </div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontWeight: 500, marginBottom: '2px' }}>{info.label}</div>
                          <div className="font-semibold" style={{ color: '#FFFFFF', fontSize: '18px' }}>{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-lg"
                style={{ gap: '12px', background: '#16A34A', color: '#FFFFFF', padding: 'clamp(14px, 3vw, 16px) clamp(24px, 5vw, 32px)', borderRadius: '9999px', boxShadow: '0 4px 20px rgba(22, 163, 74, 0.3)', textDecoration: 'none', transition: 'all 0.3s', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle style={{ width: '24px', height: '24px' }} />
                Fale pelo WhatsApp
              </motion.a>
            </div>
          </FadeLeft>

          {/* Form */}
          <FadeRight delay={0.2}>
            <div style={{ background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: 'clamp(20px, 4vw, 32px)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={labelStyle}>Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Seu nome completo"
                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      placeholder="seu@email.com"
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      placeholder="(21) 99999-9999"
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Tipo de Evento *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="" style={{ background: '#0A0A0A' }}>Selecione...</option>
                      <option value="Casamento" style={{ background: '#0A0A0A' }}>Casamento</option>
                      <option value="Aniversário" style={{ background: '#0A0A0A' }}>Aniversário</option>
                      <option value="Evento Corporativo" style={{ background: '#0A0A0A' }}>Evento Corporativo</option>
                      <option value="Roda de Samba" style={{ background: '#0A0A0A' }}>Roda de Samba</option>
                      <option value="Festa Privada" style={{ background: '#0A0A0A' }}>Festa Privada</option>
                      <option value="Outro" style={{ background: '#0A0A0A' }}>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Data Pretendida</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Conte-nos mais sobre seu evento..."
                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="font-bold flex items-center justify-center"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)',
                    color: '#0A0A0A',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    gap: '12px',
                    boxShadow: '0 4px 30px rgba(212,175,55,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send style={{ width: '20px', height: '20px' }} />
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Contato;
