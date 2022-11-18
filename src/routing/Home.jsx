import React from 'react'
import{ Link, useNavigate } from 'react-router-dom'
function Home(params){
    const navigate = useNavigate()
    return (  
        <div>
            <h1>Welcome to my HomePage</h1>
            <Link to={'/about'}>Go to my About page</Link>
            <button onClick={()=> navigate('/contact')}>Go to Contact page</button>
        </div>
    );
}
export default Home