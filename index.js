const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

const app = express();

//db
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('connected', () => {
  console.log('connected to db');
});

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/users', require('./routes/userRouter'));


const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`server started listening on port ${port}`)
});