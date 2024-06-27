const express = require('express');
const port=3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./config/DbConnection');
const movieRoutes = require('./routes/movieRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
connectDb();

app.use('/api/movie',movieRoutes);


app.listen(port,()=>{
    console.log('listening on port',port);
});