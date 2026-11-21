const pool = require('../config/db');

// Calcul simplifié du score d'admissibilité (barème inspiré d'Entrée Express)
function calculateImmigrationScore({ age, education_level, years_experience, french_level, english_level }) {
  let score = 0;

  // 1. Points selon l'âge (Max 110 pts)
  if (age >= 20 && age <= 29) score += 110;
  else if (age >= 30 && age <= 35) score += 95;
  else if (age >= 36 && age <= 40) score += 70;
  else if (age >= 18 && age < 20) score += 90;
  else score += 30;

  // 2. Niveau d'études (Max 150 pts)
  const eduPoints = {
    secondaire: 30,
    bts_dut: 90,
    licence: 120,
    master: 135,
    doctorat: 150,
  };
  score += eduPoints[education_level] || 30;

  // 3. Expérience professionnelle (Max 80 pts)
  if (years_experience >= 5) score += 80;
  else if (years_experience >= 3) score += 65;
  else if (years_experience >= 1) score += 40;

  // 4. Niveau de français (Bonus francophone important au Canada - Max 160 pts)
  const langPoints = { debutant: 10, B1: 60, B2: 110, C1: 140, C2: 160 };
  score += langPoints[french_level] || 0;

  // 5. Niveau d'anglais (Max 60 pts)
  const engPoints = { aucun: 0, B1: 20, B2: 40, C1: 60 };
  score += engPoints[english_level] || 0;

  return score;
}

exports.submitEvaluation = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      age,
      education_level,
      years_experience,
      french_level,
      english_level,
      target_program,
    } = req.body;

    if (!full_name || !email || !age || !education_level) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
    }

    const estimated_score = calculateImmigrationScore({
      age: Number(age),
      education_level,
      years_experience: Number(years_experience || 0),
      french_level,
      english_level,
    });

    const query = `
      INSERT INTO evaluations 
      (full_name, email, phone, age, education_level, years_experience, french_level, english_level, target_program, estimated_score)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `;

    const values = [
      full_name,
      email,
      phone || null,
      Number(age),
      education_level,
      Number(years_experience || 0),
      french_level || 'B2',
      english_level || 'aucun',
      target_program || 'Entrée Express',
      estimated_score,
    ];

    const result = await pool.query(query, values);

    let recommendation = 'Profil prometteur : une consultation avec un consultant CRIC permettra d’optimiser votre dossier.';
    if (estimated_score >= 430) {
      recommendation = 'Excellent profil ! Vous avez de très fortes chances via Entrée Express ou la Mobilité Francophone.';
    } else if (estimated_score < 320) {
      recommendation = 'Profil à renforcer : la voie des études au Canada ou une offre d’emploi validée (EIMT) est recommandée.';
    }

    res.status(201).json({
      message: 'Évaluation enregistrée avec succès',
      evaluation: result.rows[0],
      recommendation,
    });
  } catch (error) {
    console.error('Erreur submitEvaluation :', error);
    res.status(500).json({ message: 'Erreur serveur lors de l’enregistrement.' });
  }
};

exports.getAllEvaluations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM evaluations ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des évaluations.' });
  }
};
