import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <p>This page doesn't exist. Go <Link to='/'>home</Link></p>
        </div>
    );
};

export default NotFoundPage;