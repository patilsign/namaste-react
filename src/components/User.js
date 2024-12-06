import { useState } from "react";

const User = (props) => {
     const { name, location} = props.person ;
     [count , setCount] = useState(0);
     [count2 , setCount2] = useState(1);
 return (

     <div className="user-card">
          <h2>Functional Component -------</h2>
          <h5>{count}</h5>
          <h5>{count2}</h5>
          <h3>Name: {name}</h3>
          <h4>Location : {location}</h4>
          <br/>
     </div>
 )
}

export default User