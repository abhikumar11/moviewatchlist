const mongoose = require('mongoose');

const movieSchema=new mongoose.Schema({
    title:{
        type: "string",
    },
    description:{
        type: "string",
    },
    year:{
        type: "number",
    },
    genre:{
        type: "string",
    }
})

const Movie=mongoose.model("Movie",movieSchema);
module.exports = Movie;