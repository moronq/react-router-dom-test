import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {PostType} from "../types/types";
import {AxiosResponse} from "axios";
import Button from 'antd/lib/button';

const axios = require('axios')

const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState<PostType | null>(null)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response:AxiosResponse<PostType>) => setPost(response.data) )
    },[id])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div>
            <Button onClick={goBack}>Go Back</Button>
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