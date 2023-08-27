import { useState } from "react";
import { data as movies } from "../utility/mockdata";

const MovieGenres = ({ selectedGenre, onSelect }) => {
  // get all the unique genres from the movie list
  const splitGenres = movies.flatMap((movie) => movie.genre.split("|"));
  const genres = Array.from(new Set(splitGenres));

  return (
    <ul className="flex flex-wrap gap-2 w-full py-2">
      {/* "All" for no filter */}
      <li
        className={!selectedGenre ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
        onClick={() => onSelect("")}
      >
        <a className="text-indigo-500 cursor-pointer hover:text-indigo-700">
          All
        </a>
      </li>
      {/* map through all genres */}
      {genres.map((genre, i) => {
        const isSelected = genre === selectedGenre;
        return (
          <li
            key={i}
            className={isSelected ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
            onClick={() => onSelect(genre)}
          >
            <a className="text-indigo-500 cursor-pointer hover:text-indigo-700">
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const MovieList = ({ selectedGenre }) => {
  // if there's a selectedGenre we use the array.filter function to filter the movie data
  // otherwise, return all the movies.
  const filteredMoviesByGenre = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies;
  return (
    <div className="p-2 flex flex-wrap gap-2">
      {/* map through all the filtered movies */}
      {filteredMoviesByGenre.map((movie) => {
        return (
          <a key={movie.id} className="p-4 shadow-sm rounded-md w-full border ">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>Genres: {movie.genre.replaceAll("|", ", ")}</p>
          </a>
        );
      })}
    </div>
  );
};

const Assignment2 = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div class="flex justify-center min-h-screen py-4">
      <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-2">
        <div className="flex flex-wrap gap-2 w-full pt-2">
          <MovieGenres
            selectedGenre={selectedGenre}
            onSelect={setSelectedGenre}
          />
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <MovieList selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
};

export default Assignment2;
