const express = require('express');
const connectDb = require('../infra/db');
const movieRoutes = require('../src/routes/movie.routes');
const sessionRoutes = require('../src/routes/session.routes');
const ticketsRoutes = require('../src/routes/tickets.routes');

require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
connectDb()


app.use('/api/movie', movieRoutes)
app.use('/api/session', sessionRoutes)
app.use('/api/tickets', ticketsRoutes)
app.listen(port, () => console.log(`Server is running on port ${port}`))