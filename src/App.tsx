import Header from "./components/layout/Header";
import Discovery from "./containers/discovery";
import Home from "./containers/home";
import Explore from "./containers/explore";
import History from "./containers/history";
import MainLayout from "./components/layout/MainLayout";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="discovery" element={<Discovery/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="history" element={<History/>}/>
                    <Route path="explore" element={<Explore/>}/>
                </Route>
            </Routes>

    );
}

export default App;
