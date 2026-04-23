import styled from "styled-components";
import { Link } from "react-router";

type Props = {
    movie: MovieItem;
};

const Card = styled<Link>`
    width: 200px;
    border-radius: 12px;
    padding: 10px;
    background-color: white;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.5s;
    box-shadow: 0 4px 10px
    img {
        width: 100%;
        
    }
`;

interface MovieItem {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
}

const Card = styled(Link)`
    width: 200px;
    border-radius: 12px;
    padding: 10px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 8px;

    img {
        width: 100%;
        border-radius: 8px;
    }

    &:hover {
        transform: scale(1.03);
        transition: 0.1s;
    }
`;

function MovieCard({ movie }: { movie: MovieItem }) {
    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
        </Link>
    );
}

export default MovieCard;
