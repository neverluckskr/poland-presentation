import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Poland Presentation API is running' });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  }
});
