import React from 'react'
import { Link } from 'react-router-dom'
 
function About(params) {
    return(
        <div>
            <h2>This is my About page</h2>
            <Link to='/home'>Back to my Home Page</Link>
        </div>
    )
} 
 export default About