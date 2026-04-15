// server.js — démarre l'application
const app = require('./app');
const connectDB = require('./config/database');

// Connexion à la base de données MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════╗
    ║   🚀 Serveur démarré avec succès!          ║
    ╠════════════════════════════════════════════╣
    ║   📍 URL: http://localhost:${PORT}             ║
    ║   📚 API: http://localhost:${PORT}/api/etudiants║
    ╚════════════════════════════════════════════╝
    `);
});
