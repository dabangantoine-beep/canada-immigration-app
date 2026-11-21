CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    phone VARCHAR(30),
    country_of_residence VARCHAR(100),
    role VARCHAR(20) DEFAULT 'client',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS evaluations (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    age INT NOT NULL,
    education_level VARCHAR(100) NOT NULL,
    years_experience INT NOT NULL,
    french_level VARCHAR(50),
    english_level VARCHAR(50),
    target_program VARCHAR(100),
    estimated_score INT,
    status VARCHAR(30) DEFAULT 'nouveau',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dossiers (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES users(id) ON DELETE CASCADE,
    program_type VARCHAR(100) NOT NULL,
    ircc_application_number VARCHAR(50),
    status VARCHAR(50) DEFAULT 'collecte_documents',
    notes TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
