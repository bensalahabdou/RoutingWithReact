import React from 'react';

import { Link } from 'react-router-dom';

const ArticleForm = ({ title, date,id }) => {
    return (
    <div>
        <small>{date}</small>
        <br/>
        <h2>{title}</h2>
        <Link to={`/blog/${id}`}><button>read more</button></Link>
        <hr/>
    </div>
    );
}



export default ArticleForm;