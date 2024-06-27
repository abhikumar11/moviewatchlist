import axios from "axios";
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./constants"

export const fetchMovies=()=>async(dispatch)=>{
   dispatch({type:FETCH_MOVIES_REQUEST});
   try {
    const {data}=await axios.get("http://localhost:3001/api/movie/all");
    console.log("movie",data);
    dispatch({type:FETCH_MOVIES_SUCCESS,payload:data});
   } catch (err) {
    dispatch({type:FETCH_MOVIES_FAILURE,payload:err.message});
   }
}
export const addMovie=(data)=>async(dispatch)=>{
    const {title,description,year,genre}=data;
    console.log("addMovie",data);
    dispatch({type:FETCH_MOVIES_REQUEST});
    try {
        await axios.post("http://localhost:3001/api/movie/add",{title,description,year,genre});
        dispatch(fetchMovies());
    } catch (err) {
        dispatch({type:FETCH_MOVIES_FAILURE,payload:err.message});
    }

}