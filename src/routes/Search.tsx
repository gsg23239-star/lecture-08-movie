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
    const [list, setList] = useState<MovieItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [searchparams] = useSearchParams();
    const  k = searchparams.get("keyword");

    useEffect(() => {
        if (!k) return;

        setLoading(true);
        setList({});
        setError("");

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${encodeURIComponent(keyword)}`)
            .then(res => res.json())
            .then((json: ApiResponseType) => {
                    setlist(json.search);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setError(err);
                    setLoading(false);
            })
    }, [k]);

    return (
        <div>
            <h2>검색 키워드 : {k}</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <SearchBar />

            <list>

            {list.map((value, index) => <div key={index}>
            <MovieCard movie={value} key={index}/>
    </div>;
    );

export default Search;
