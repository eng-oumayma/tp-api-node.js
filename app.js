// app.js — définit l'application, ne démarre rien
const express = require('express');
const dotenv = require('dotenv');
const etudiantRoutes = require('./routes/etudiantRoutes');

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🎓 Bienvenue sur l\'API de gestion des étudiants! ',
        version: '1.0.0',
        endpoints: {
            listeEtudiants: 'GET /api/etudiants',
            creerEtudiant: 'POST /api/etudiants',
            voirEtudiant: 'GET /api/etudiants/:id',
            modifierEtudiant: 'PUT /api/etudiants/:id',
            supprimerEtudiant: 'DELETE /api/etudiants/: id',
            parFiliere: 'GET /api/etudiants/filiere/: filiere'
        }
    });
});

// Monter les routes des étudiants
app.use('/api/etudiants', etudiantRoutes);

// Route 404 pour les URLs non trouvées
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} non trouvée`
    });
});

module.exports = app;
