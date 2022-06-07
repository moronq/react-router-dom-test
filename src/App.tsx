import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import LayoutRouter from "./components/LayoutRouter";

function App() {
    return (
        <Routes>
            <Route path='/' element={<LayoutRouter/>}>
                <Route index element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='blog' element={<BlogPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
