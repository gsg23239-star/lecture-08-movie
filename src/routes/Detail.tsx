import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

interface MovieDetail {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Genre: string;
    Director: string;
}

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<MovieDetail | null>(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
            .then(res => res.json())
            .then((json: MovieDetail) => {
                setData(json);
            })
            .catch(() => {
                console.error("상세 데이터를 불러오는 중 오류 발생");
            });
    }, [id]);

    if (!data) return <p>Loading...</p>;

    return (
        <Wrapper>
            <BackButton onClick={() => navigate(-1)}>← Back</BackButton>

            <img src={data.Poster} alt={data.Title} />

            <h1>{data.Title}</h1>
            <p>
                <strong>Year:</strong> {data.Year}
            </p>
            <p>
                <strong>Genre:</strong> {data.Genre}
            </p>
            <p>
                <strong>Director:</strong> {data.Director}
            </p>
            <Plot>{data.Plot}</Plot>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 40px;

    img {
        width: 240px;
        border-radius: 12px;
    }
`;

const BackButton = styled.button`
    display: block;
    margin-bottom: 20px;
    background: none;
    border: none;
    color: #ff5959;
    font-size: 16px;
    cursor: pointer;
    padding: 0;

    &:hover {
        text-decoration: underline;
    }
`;

const Plot = styled.p`
    margin-top: 20px;
    line-height: 1.6;
`;
