import Home from "./routes/Home";
import Search from "./routes/Search.tsx";
import Detail from "./routes/Detail.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}
