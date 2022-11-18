import React from "react";
import './Interface/style.css';

function MyReact() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const h3 = {
       fontSize: '30px'
  }

 
   return(
    <div className="MyReact">
      <div className="content">
         <h1>{ title }</h1>
         <p>Liked { likes } times</p>
            </div>
            <div style={{backgroundColor:'blue'}}>Welcome to REACT</div> 
            <div style={h3}>Welcome to REACT</div> 
       
    </div>
  );
}

export default MyReact;
