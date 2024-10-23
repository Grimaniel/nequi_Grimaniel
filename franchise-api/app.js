require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const franchiseRoutes = require('./src/routes/franchiseRoutes');

app.use(express.json());
app.use('/api/franchises', franchiseRoutes);


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync();
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
