const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const candyRoutes = require('./routes/candyroutes');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/candy', candyRoutes);

sequelize.sync().then(result => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.log(err);
});
