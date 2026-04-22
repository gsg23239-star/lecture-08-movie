import { useEffect } from "react";
function Detail() {
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${영화ID}&plot=full`)
        .then((res => res.json())
        .then((data) => console.log(data)))
    }, []);

    return (
       <div>
            <h1>상세 페이지</h1>
            <h1>{movie?.Title}</h1>
            <img src={movie?.Poster} />
            <p>{movie?.Plot}</p>
            <p>{movie?.Genre}</p>
            <p>{movie?.Director}</p>
       </div>
    )}