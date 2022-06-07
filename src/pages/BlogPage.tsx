import React, {useEffect, useState} from 'react';
import {AxiosResponse} from "axios";
import {PostType} from "../types/types";
import {Link} from 'react-router-dom';

const axios = require('axios')

const BlogPage = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response:AxiosResponse<Array<PostType>>) => setPosts(response.data))
    },[])


    return (
        <div>
            <h2>Our News</h2>
            <Link to={'/blog/new'}>Create a post</Link>
            {
                posts.map((el)=><Link to={`/blog/${el.id}`} key={el.id}>
                    <li>
                        {el.title}
                    </li>
                </Link>)
            }
        </div>
    );
};

export default BlogPage;