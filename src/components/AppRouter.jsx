import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router/Routers";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
        ?  <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes>


    );
};

export default AppRouter;