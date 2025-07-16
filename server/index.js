const cors = require('cors');
const express = require('express');
const formRoutes = require('./routes/formRoute');

require('dotenv').config();
require('./config/dbConnection');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use('/', formRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
