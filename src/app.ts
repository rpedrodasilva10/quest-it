import 'dotenv/config';
import express from 'express';
import router from './routes';

const PORT = process.env.SERVER_PORT || 8080;
const API_BASE_URL = process.env.SERVER_BASE_URL || '/api/v1';

const app = express();

app.use(express.json());
app.use(API_BASE_URL, router);

app.listen(PORT, () => console.log(`✔ Quest It backend is listening on port ${PORT}`));
