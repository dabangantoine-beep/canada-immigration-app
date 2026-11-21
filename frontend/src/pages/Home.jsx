import { Link } from 'react-router-dom';

export default function Home() {
  const styles = {
    container: { fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b', lineHeight: 1.6 },
    hero: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
      color: 'white',
      padding: '4.5rem 1.5rem',
      textAlign: 'center',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255,255,255,0.15)',
      padding: '0.35rem 0.9rem',
      borderRadius: '999px',
      fontSize: '0.85rem',
      marginBottom: '1rem',
    },
    heroTitle: { fontSize: '2.4rem', fontWeight: '800', maxWidth: '750px', margin: '0 auto 1rem' },
    heroSub: { fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '620px', margin: '0 auto 2rem' },
    ctaPrimary: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '0.9rem 1.8rem',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-block',
      marginRight: '0.8rem',
    },
    ctaSecondary: {
      backgroundColor: 'white',
      color: '#0f172a',
      padding: '0.9rem 1.8rem',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-block',
    },
    section: { maxWidth: '1050px', margin: '0 auto', padding: '4rem 1.5rem' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    card: {
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    },
    trustBanner: {
      backgroundColor: '#f8fafc',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
    },
  };

  const programmes = [
    {
      titre: 'Résidence Permanente',
      desc: 'Entrée Express, Programme des travailleurs qualifiés (Arrima / Québec) et Candidats des provinces (PCP).',
    },
    {
      titre: 'Permis d’Études',
      desc: 'Choix de l’établissement (EED), demande de CAQ, lettre d’explication solide et préparation du visa.',
    },
    {
      titre: 'Permis de Travail',
      desc: 'Mobilité francophone, EIMT, permis de travail fermé ou ouvert et accompagnement employeur.',
    },
    {
      titre: 'Regroupement Familial',
      desc: 'Parrainage d’époux, conjoint de fait, enfants à charge et Super Visa pour parents et grands-parents.',
    },
  ];

  return (
    <div style={styles.container}>
      {/* Section Hero */}
      <header style={styles.hero}>
        <span style={styles.badge}>🇨🇦 Accompagnement réglementé • Licence CCIC #R000000</span>
        <h1 style={styles.heroTitle}>Concrétisez votre projet d’immigration au Canada en toute sécurité</h1>
        <p style={styles.heroSub}>
          De l’évaluation initiale de votre profil jusqu’à l’obtention de votre visa, notre équipe vous guide à chaque étape officielle.
        </p>
        <div>
          <Link to="/evaluation" style={styles.ctaPrimary}>Évaluer mon admissibilité</Link>
          <Link to="/services" style={styles.ctaSecondary}>Découvrir les programmes</Link>
        </div>
      </header>

      {/* Section Programmes */}
      <section style={styles.section}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Nos domaines d’intervention</h2>
        <p style={{ textAlign: 'center', color: '#64748b' }}>Des stratégies adaptées à votre parcours académique, professionnel et familial.</p>

        <div style={styles.grid}>
          {programmes.map((prog) => (
            <div key={prog.titre} style={styles.card}>
              <h3 style={{ color: '#1e3a8a', marginTop: 0 }}>{prog.titre}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>{prog.desc}</p>
              <Link to="/evaluation" style={{ color: '#dc2626', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>
                Vérifier mon éligibilité →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bandeau de confiance */}
      <section style={styles.trustBanner}>
        <h3 style={{ margin: '0 0 0.5rem' }}>Pourquoi passer par un consultant réglementé ?</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', color: '#475569' }}>
          Évitez les erreurs de procédure, les refus évitables et les fraudes. Nous vérifions chaque pièce justificative selon les exigences d’IRCC.
        </p>
        <Link to="/evaluation" style={styles.ctaPrimary}>Commencer mon test gratuit</Link>
      </section>
    </div>
  );
}
