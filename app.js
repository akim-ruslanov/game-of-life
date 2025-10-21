import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename)
console.log(__dirname)

const app = express();
const PORT = process.env.PORT || 3001;

// Serve CRA build folder
app.use(express.static(path.join(__dirname, 'build')));

// For all other routes, serve index.html (CRA client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Game of Life CRA app running on port ${PORT}`);
});
