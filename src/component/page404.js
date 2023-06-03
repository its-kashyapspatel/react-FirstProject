import React from 'react'
import {Link} from 'react-router-dom';

export default function Page404() {
  return (
    <div>
        Oops! the requested url is not available.
        <p>
            <Link to='/users'>
                Go to Home
            </Link>
        </p>
    </div>
  );
}
