import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router";

interface MovieItem {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
}

interface SearchResponse {
    Search: MovieItem[];
    totalResults: string;
    Response: "True" | "False";
    Error?: string;
}

const Wrapper = styled.div`
    padding: 40px;

    h2 {
        margin-bottom: 20px;
    }
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const ErrorMsg = styled.p`
    color: red;
    margin-top: 20px;
`;

function Search() {
    const [params] = useSearchParams();
    const keyword = params.get("keyword") || "";

    const [results, setResults] = useState<MovieItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!keyword) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${encodeURIComponent(keyword)}`)
            .then(res => res.json())
            .then((data: SearchResponse) => {
                if (data.Response === "False") {
                    setError(data.Error || "검색 결과가 없습니다.");
                    setResults([]);
                } else {
                    setResults(data.Search);
                }
                setLoading(false);
            });
    }, [keyword]);

    return (
        <Wrapper>
            <h2>Search results for: "{keyword}"</h2>

            {loading && <p>Loading...</p>}
            {error && <ErrorMsg>{error}</ErrorMsg>}

            <List>
                {results.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </List>
        </Wrapper>
    );
}

export default Search;
