import React from 'react';
import {useParams} from "react-router-dom";

const EditPost = () => {

    const {id} = useParams()

    return (
        <div>
            <h2>Edit Post {id}</h2>
        </div>
    );
};

export default EditPost;