import logo from './logo.svg';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieForm/>
      <MovieList/>
    </div>
  );
}

export default App;
