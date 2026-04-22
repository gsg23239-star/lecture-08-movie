import { useState } from "react";

type MovieItem = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year : string;
};

function App() {
    const [keyword, setKeyword] = useState("");
    const [movies, setMovies] = useState([]);

    const SearchMovie = () => {
        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
            .then((res) => res.json())
            .then((data) => console.log(data,Search));
    };

    {movies.map((movie) => (
        <div key={movie.imdbID}>
            <img src={movie.Poster} width="100" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    ))}

    return (
        <div>
            <h1>영화 검색</h1>

            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="영화 제목 입력"
            />

            <button onClick={SearchMovie}>검색</button>

            {Movie.map(Movie) => (
                <div key={MOVIE.imdbID}>
                    <img src={Movie.Poster} width="100" />
                    <h3>{Movie.Title}</h3>
                    <p>{Movie.Year}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
