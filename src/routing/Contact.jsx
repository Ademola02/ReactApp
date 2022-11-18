import React from "react"
import { Link } from 'react-router-dom'
function Contact(params){
    return ( 
     <div>
        <h2>This is my Contact Page</h2>
        <Link to='/home'>back to home page</Link> 
     </div>

        );
} 
export default Contact