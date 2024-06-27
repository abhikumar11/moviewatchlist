import React, { useRef } from 'react'
import styles from "./imageform.module.css";
import { addMovie } from '../redux/action';
import { useDispatch } from 'react-redux';
const MovieForm = ({
    updateIntent,
    loading,
  }) => {
  const titleInput = useRef();
  const descInput = useRef();
  const yearInput = useRef();
  const genreInput = useRef();
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value;
    const desc=descInput.current.value;
    const genre=genreInput.current.value;
    const year = yearInput.current.value;
    console.log(title, desc, year, genre);
    dispatch(addMovie({title,description:desc,year,genre}));
    handleClear();
  };

  const handleClear = () => {
    titleInput.current.value = "";
    descInput.current.value = "";
    genreInput.current.value = "";
    yearInput.current.value = "";
  };

  const handleDefaultValues = () => {
    titleInput.current.value = updateIntent.title;
    descInput.current.value = updateIntent.url;
  };

  return (
    <div className={styles.imageForm}>
      <span>
        {!updateIntent
          ? "Add movie to Watchlist"
          : `Update movie ${updateIntent.title}`}
      </span>

      <form onSubmit={handleSubmit}>
        <input required placeholder="Title" ref={titleInput} />
        <input required placeholder="Description" ref={descInput} />
        <input required placeholder="Year" ref={yearInput} />
        <input required placeholder="Genre" ref={genreInput} />
        <div className={styles.actions}>
          <button type="button" onClick={handleClear} disabled={loading}>
            Clear
          </button>
          <button disabled={loading}>{!updateIntent ? "Add" : "Update"}</button>
        </div>
      </form>
    </div>
  )
}

export default MovieForm