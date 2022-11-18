import React from 'react';
import {useLocation, useParams } from 'react-router-dom'

function Dashboard(params){
    const {id} = useParams()
   // or
   // const {pathname} = useLocation()
   //const loc = pathname.split('/')[2] instead of log(location.pathname)
   // console.log(loc);
   console.log(id);
    return (  
        <div>
            <h1> Welcome to my Dashboard</h1>
        </div>
    );
}
export default Dashboard