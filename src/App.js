import React from 'react';
import './styles/app.css';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
} from "react-router-dom";

import About from "./pages/About";
import Posts from "./pages/Posts";



function App() {
    return (
            <BrowserRouter>
                    <div className="navbar">
                        <div className="navbar__links">
                            <Link to="/about">О сайте</Link>
                            <Link to="/posts">Посты</Link>
                        </div>
                    </div>
                <Routes>
                    <Route path="/">
                        <About/>
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App;
