// GlobalStyle이라고 하는 이 변수는, "글로벌 CSS" 기능을 리액트에서 사용하기 위해 만든 변수
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
