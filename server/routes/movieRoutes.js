const express=require('express');
const { addMovie, getMovies } = require('../controller/Movie');
const router=express.Router();

router.get("/all",getMovies);
router.post("/add",addMovie);

module.exports = router;