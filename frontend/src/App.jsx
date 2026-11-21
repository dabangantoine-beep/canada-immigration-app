import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Evaluation from './pages/Evaluation.jsx';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      fontFamily: 'system-ui, sans-serif',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <Link to="/" style={{ fontWeight: '800', fontSize: '1.2rem', color: '#0f172a', textDecoration: 'none' }}>
        🍁 Horizon Canada Immigration
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#334155', fontWeight: '500' }}>Accueil</Link>
        <Link to="/services" style={{ textDecoration: 'none', color: '#334155', fontWeight: '500' }}>Programmes</Link>
        <Link to="/evaluation" style={{
          textDecoration: 'none',
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}>
          Évaluation gratuite
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: '600' }}>Espace Client</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '0.85rem',
      marginTop: '3rem',
    }}>
      <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Horizon Canada Immigration — Cabinet Conseil
      </p>
      <p style={{ maxWidth: '750px', margin: '0 auto 1rem' }}>
        Avis légal : Nous sommes un cabinet privé de conseil en immigration et ne sommes pas affiliés au gouvernement du Canada ni à IRCC.
      </p>
      <p>© {new Date().getFullYear()} Horizon Canada Immigration. Tous droits réservés.</p>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/services" element={<Home />} />
        <Route path="/login" element={<div style={{ padding: '4rem 1.5rem', textAlign: 'center', fontFamily: 'sans-serif' }}><h2>Espace Client & Consultant</h2><p>Module de connexion en cours de construction.</p></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
