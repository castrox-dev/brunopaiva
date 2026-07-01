import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Shows from './components/Shows';
import Events from './components/Events';
import Agenda from './components/Agenda';
import Spotify from './components/Spotify';
import YouTubeSection from './components/YouTube';
import InstagramFeed from './components/Instagram';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Mapa from './components/Mapa';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function SectionDivider({ gold = true }) {
  return (
    <div style={{ width: '100%', height: '3px', background: gold
      ? 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.05) 10%, rgba(212, 175, 55, 0.4) 30%, rgba(212, 175, 55, 0.7) 50%, rgba(212, 175, 55, 0.4) 70%, rgba(212, 175, 55, 0.05) 90%, transparent 100%)'
      : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 10%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.03) 90%, transparent 100%)'
    }} />
  );
}

function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0A0A0A' }}>
      <Header />
      <main>
        <Hero />
        <Banner />
        <SectionDivider gold={true} />
        <Sobre />
        <SectionDivider gold={false} />
        <Shows />
        <SectionDivider gold={true} />
        <Events />
        <SectionDivider gold={false} />
        <Agenda />
        <SectionDivider gold={true} />
        <Spotify />
        <SectionDivider gold={false} />
        <YouTubeSection />
        <SectionDivider gold={true} />
        <InstagramFeed />
        <SectionDivider gold={false} />
        <Galeria />
        <SectionDivider gold={true} />
        <Depoimentos />
        <SectionDivider gold={false} />
        <FAQ />
        <SectionDivider gold={true} />
        <Contato />
        <SectionDivider gold={false} />
        <Mapa />
      </main>
      <SectionDivider gold={true} />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
