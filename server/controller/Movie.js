const Movie = require("../models/MovieModel");

exports.addMovie=async(req,res)=>{
    const {title,description,year,genre} = req.body;
    console.log(title, description, year, genre);
    try {
        const movie=new Movie({title,description,year,genre});
        await movie.save();
        res.status(200).json(movie);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}
exports.getMovies = async (req, res) => {
    
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};