import Header from "./components/layout/Header";
import Discovery from "./containers/discovery";
import Home from "./containers/home";
import Explore from "./containers/explore";
import History from "./containers/history";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        // <div >
        //     <Header />
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}/>
                    <Route path="discovery" element={<Discovery/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="history" element={<History/>}/>
                    <Route path="explore" element={<Explore/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
