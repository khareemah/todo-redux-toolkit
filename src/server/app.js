import express from 'express';
import { nanoid } from 'nanoid';
import cors from 'cors';
const app = express();
let taskList = [
  { id: nanoid(), task: 'walk the dog' },
  { id: nanoid(), task: 'wash dishes' },
  { id: nanoid(), task: 'drink coffee' },
  { id: nanoid(), task: 'take a nap' },
];

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Hello From Server...</h1>');
});

app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});
app.use((req, res) => res.status(404).send('Route does not exist'));
const port = process.env.PORT || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
