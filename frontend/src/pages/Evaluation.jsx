import { useState } from 'react';
import { apiRequest } from '../services/api';

export default function Evaluation() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    age: 28,
    education_level: 'licence',
    years_experience: 3,
    french_level: 'B2',
    english_level: 'B1',
    target_program: 'Entrée Express',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await apiRequest('/evaluations', {
        method: 'POST',
        body: formData,
      });
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '650px',
      margin: '2.5rem auto',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
    }}>
      <h2 style={{ marginTop: 0, color: '#0f172a' }}>Évaluation gratuite d’admissibilité — Canada</h2>
      <p style={{ color: '#475569' }}>
        Remplissez ce formulaire pour estimer votre score indicatif et recevoir une première orientation.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <input
          name="full_name"
          placeholder="Nom complet *"
          required
          value={formData.full_name}
          onChange={handleChange}
          style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Adresse email *"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          name="phone"
          placeholder="Téléphone / WhatsApp (ex: +237...)"
          value={formData.phone}
          onChange={handleChange}
          style={{ padding: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Âge :
          <input
            name="age"
            type="number"
            min="18"
            max="65"
            value={formData.age}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
        </label>

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Niveau d’études :
          <select
            name="education_level"
            value={formData.education_level}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          >
            <option value="secondaire">Baccalauréat / Secondaire</option>
            <option value="bts_dut">BTS / DUT (Bac+2)</option>
            <option value="licence">Licence / Bachelor (Bac+3)</option>
            <option value="master">Master / Ingénieur (Bac+5)</option>
            <option value="doctorat">Doctorat (PhD)</option>
          </select>
        </label>

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Années d’expérience professionnelle :
          <input
            name="years_experience"
            type="number"
            min="0"
            max="35"
            value={formData.years_experience}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
        </label>

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Niveau de Français :
          <select
            name="french_level"
            value={formData.french_level}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          >
            <option value="debutant">Débutant (A1/A2)</option>
            <option value="B1">Intermédiaire (B1)</option>
            <option value="B2">Avancé (B2 - Recommandé)</option>
            <option value="C1">Courant (C1)</option>
            <option value="C2">Bilingue / Natif (C2)</option>
          </select>
        </label>

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Niveau d’Anglais :
          <select
            name="english_level"
            value={formData.english_level}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          >
            <option value="aucun">Aucun / Débutant</option>
            <option value="B1">Intermédiaire (B1)</option>
            <option value="B2">Avancé (B2)</option>
            <option value="C1">Courant (C1/C2)</option>
          </select>
        </label>

        <label style={{ fontWeight: '600', color: '#334155' }}>
          Projet principal :
          <select
            name="target_program"
            value={formData.target_program}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.7rem', marginTop: '0.35rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          >
            <option value="Entrée Express">Résidence Permanente (Entrée Express / Arrima)</option>
            <option value="Permis d'études">Étudier au Canada</option>
            <option value="Permis de travail">Travailler au Canada</option>
            <option value="Parrainage">Regroupement familial</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.85rem',
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
            marginTop: '0.5rem',
          }}
        >
          {loading ? 'Calcul en cours...' : 'Calculer mon score d’admissibilité'}
        </button>
      </form>

      {error && (
        <p style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '0.8rem', borderRadius: '6px', marginTop: '1rem' }}>
          {error}
        </p>
      )}

      {result && (
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', backgroundColor: '#f0fdf4', border: '1px solid #16a34a', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, color: '#15803d' }}>Score estimé : {result.evaluation.estimated_score} points</h3>
          <p style={{ marginBottom: 0, color: '#1e293b' }}>{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}
