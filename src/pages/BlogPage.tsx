import React, {useEffect, useState} from 'react';
import {AxiosResponse} from "axios";
import {PostType} from "../types/types";
import {Link, useSearchParams} from 'react-router-dom';
import BlogFilter from "../components/BlogFilter";

const axios = require('axios')

const BlogPage = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post')
    const latest = searchParams.has('latest')

    const startsFrom = latest ? 80 : 1

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response:AxiosResponse<Array<PostType>>) => setPosts(response.data))
    },[])


    return (
        <div style={{padding: '15px'}}>
            <h2>Our News</h2>
            <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} latest={latest}/>
            <Link to={'/blog/new'}>Create a post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery || '') && post.id >= startsFrom
                ).map((el)=><Link to={`/blog/${el.id}`} key={el.id}>
                    <li>
                        {el.title}
                    </li>
                </Link>)
            }
        </div>
    );
};

export default BlogPage;