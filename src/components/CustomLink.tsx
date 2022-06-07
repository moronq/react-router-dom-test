import React, {FC} from 'react';
import {Link, useMatch} from 'react-router-dom';

type CustomLinkType = {
    children?: React.ReactNode
    to: string
    props?: React.ReactNode
}

const CustomLink: FC<CustomLinkType> = ({children, to, ...props}) => {

    const match = useMatch(to)

    return (
        <Link to={to} {...props} style={{
            textDecoration: match ? 'underline' : 'none'
        }}>
            {children}
        </Link>
    );
};

export default CustomLink;