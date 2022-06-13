import React, {FC, useState} from 'react';
import {URLSearchParamsInit} from "react-router-dom";

type BlogFilterType = {
    setSearchParams: (nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean |
            undefined; state?: any; } | undefined) => void
    latest: boolean
    postQuery: string | null
}

const BlogFilter:FC<BlogFilterType> = ({setSearchParams, latest, postQuery}) => {

    const [value, setValue] = useState(postQuery || '')
    const [checked, setChecked] = useState(latest)

    const onInputChange =(e:React.ChangeEvent<HTMLInputElement>)=> {
        setValue(e.target.value)
    }

    const onCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target
        // @ts-ignore
        const query = form.search.value
        // @ts-ignore
        const isLatest = form.checkbox.checked
        const params: {post?: string, latest?: boolean} = {}
        if(query.length) params.post = query
        if(isLatest) params.latest = isLatest
        // @ts-ignore
        setSearchParams(params)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="search" name='search' value={value} onChange={onInputChange}/>
            <label>
                <input type="checkbox" name='checkbox' checked={checked} onChange={onCheckboxChange}/> Show latest
            </label>
            <button type='submit'>Search</button>
        </form>
    );
};

export default BlogFilter;