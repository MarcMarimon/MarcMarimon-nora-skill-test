import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './models';
import surveyRoutes from './routes/surveyRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', surveyRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully with alter option.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to sync the database:', error);
  });
