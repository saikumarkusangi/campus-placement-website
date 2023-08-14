import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';
import cors from 'cors';

// import routes
import companyRoutes from './routes/company.js';

dotenv.config();
const app = express();
connectToDb();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.use(companyRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});
