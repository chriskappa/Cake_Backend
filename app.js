import express from 'express';
import logger from 'morgan';
import connectDB from './db.js';
import cakeRoutes from './routes/cakeRoutes.js';
import cors from 'cors';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import "dotenv/config";
import { getApiLimiter } from './utils/util.js';


var app = express();
const PORT = process.env.PORT || 3000;
const requestLimiterMiddleware = getApiLimiter();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();
app.use('/api', requestLimiterMiddleware, cakeRoutes);

// Error middleware
app.use(errorMiddleware);

app.listen(PORT || process.env.PORT, () => {
  console.log(`Cake app listening on port ${PORT}`)
})
export default app;