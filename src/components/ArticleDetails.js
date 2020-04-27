import React from 'react';

import { Link } from 'react-router-dom';

const ArticleForm = ({match, articles}) => {
    console.log(match, articles)
    return (
    <div>
        <Link to={`/blog`}><button> &lt;Back</button></Link>
        <hr/>
        <small>{articles[(match.params.id)-1].title}</small>
        <br/>
        <h2>{articles[(match.params.id)-1].title}</h2>
        <img src={articles[(match.params.id)-1].Img}  alt=""/>
        <p>{articles[(match.params.id)-1].smallDescription}</p>
    </div>
    );
}



export default ArticleForm;