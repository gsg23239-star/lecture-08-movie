import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 400px;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 12px 16px;
    background: #ff5959;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: #ff7a7a;
    }
`;

function SearchBar() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!value.trim()) return;

        navigate(`/search?keyword=${encodeURIComponent(value)}`);

        // 사용자를 강제 이동 시키는데, 그주소에 첫글자에 / 가 없으면
        // 지금 현재의 주소 + search 로 이동시킴
        // 그 주소에 첫글자가 / 로 시작하면
        // /search 로 이동시킴
    };

    return (
        <Wrapper>
            <Input
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
                placeholder="Search movies..."
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    e.key === "Enter" && handleSearch()
                }
            />
            <Button onClick={handleSearch}>Search</Button>
        </Wrapper>
    );
}

export default SearchBar;
