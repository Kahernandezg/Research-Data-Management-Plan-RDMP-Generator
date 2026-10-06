import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static assets from src folder
app.use(express.static(path.join(__dirname, 'src')));

// SPA fallback to index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
