import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
     constructor(){
          super();
          console.log("Constructor Parent Called");
     }
     componentDidMount(){
          console.log("componentDidMount() Parent Called");
     }
     render(){
          console.log("render() Parent Called");
          return (
               <div className="about">
               This is Namaste React Series
               <UserClass name={{ name: 'First', location: 'Nanded' }}/>
               <UserClass name={{ name: 'Second', location: 'Nanded' }}/>

               <UserContext.Consumer>
                    {(data) => <h1 className="font-bold">{data.loggedInUser}</h1>}
               </UserContext.Consumer>
          </div>
          )
     }
}
/* const About = () => {
     return (
          <div className="about">
               This is Namaste React Series
               <UserClass person={{ name: 'Santosh', location: 'Nanded' }}/>
          </div>
     )
} */
export default About

//<User person={{ name: 'Akshay', location: 'Dehradun' }}/>