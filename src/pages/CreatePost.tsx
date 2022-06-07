import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const CreatePost = () => {

    const navigate = useNavigate()
    const {signOut} = useAuth()
    const onclick = () => {
        signOut(()=> navigate('/'))
    }

    return (
        <div>
            <h2>Create a post</h2>
            <button onClick={onclick}>Logout</button>
        </div>
    );
};

export default CreatePost;