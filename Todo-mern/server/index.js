// const express = require('express');
// const mongoose = require('mongoose');
// // const dotenv = require('dotenv').config();
// const {dbcon} = require('./utils/dbcon');
// const TodoItemRoute = require('./routes/todoItems')
// const PORT = process.env.PORT || 5500;
// const app = express();
// app.use(express.json());
// app.use('/', TodoItemRoute);

// dbcon();

// app.listen(PORT, ()=>{
//     console.log("server connected")
// })


const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const cors = require('cors')


const app =express()

app.use(express.json());

const  PORT = process.env.PORT || 5500;

// use cors to allow acces from different adress from localhost 3000   to 5500
app.use(cors())

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Db connection established"))
.catch(err => console.error(err))

app.use('/', TodoItemRoute);


app.listen(PORT, ()=>{
    console.log('listening on port')
})

//  user- abhinav69596959
//  pass - abhinav123