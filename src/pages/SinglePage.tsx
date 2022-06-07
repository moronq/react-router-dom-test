import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {PostType} from "../types/types";
import {AxiosResponse} from "axios";

const axios = require('axios')

const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState<PostType | null>(null)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response:AxiosResponse<PostType>) => setPost(response.data) )
    },[id])

    return (
        <div>
            {post &&
            <>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`/blog/${id}/edit`}>
                    Edit post
                </Link>
            </>
            }
        </div>
    );
};

export default SinglePage;