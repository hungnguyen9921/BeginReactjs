const express = require('express');
const path = require('path');
const app = express();
const port = 8800;

const dotenv = require('dotenv')
dotenv.config()
const db = require('./src/config/db');

// Connect to db//
db.connect();

app.use(express.urlencoded({
  extended:true
}))

app.use(express.json())

//// Router /////
const userRoute = require('./routers/userRoute');
const AuthRoute = require('./routers/AuthRoute')

app.use('/api/users', userRoute);
app.use('/api/auth', AuthRoute);

// app.post('/',(req, res, next) =>{
//   console.log(req.body);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
