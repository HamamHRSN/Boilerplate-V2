import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>This Page Is Not Exist 404!</h1>
        {/*<a href="/">Go Home</a>*/}
        <Link to="/">GO Home</Link>
    </div>
);

export default NotFoundPage;
