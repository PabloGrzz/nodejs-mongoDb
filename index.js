import express from 'express';
import { connectDB } from './db.js';
import User from './models/user.model.js';

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', async(req, res) => {
    const users = await User.find();
    return res.json(users);
})

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    await user.save()
    return res.json(user)
})


app.listen(port, () => {
  console.log('Server is running on http://localhost:'+ port);
});
