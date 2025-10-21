import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serve build folder
app.use('/game-of-life', express.static(path.join(__dirname, 'build')));

// For all other routes, serve index.html
app.get('/game-of-life/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Game of Life app running on port ${PORT}`));
