const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'https://localhost:8081'
}

// middlewares

app.use(cors(corOptions));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello'})
})

//port

const PORT = process.env.PORT || 8080

// server


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})