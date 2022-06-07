import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import LayoutRouter from "./components/LayoutRouter";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import RequireAuth from "./hoc/RequireAuth";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./hoc/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<LayoutRouter/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='about-us' element={<Navigate to={'/about'} replace/>}/>
                    <Route path='blog' element={<BlogPage/>}/>
                    <Route path='blog/:id' element={<SinglePage/>}/>
                    <Route path='blog/:id/edit' element={<EditPost/>}/>
                    <Route path='blog/new' element={<RequireAuth children={<CreatePost/>}/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>

    );
}

export default App;
