const express = require('express');
const connectDb = require('../infra/db');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
connectDb()

app.listen(port, () => console.log(`Server is running on port ${port}`))