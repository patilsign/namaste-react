import { LOGO_URL } from "../utils/constants";
const Header = () => (
     <div className="header">
       <div className="logo">
         <img
           alt="logo"
           src= { LOGO_URL }
         ></img>
       </div>
       <div>
         <ul className="nav-items">
           <li>Home</li>
           <li>About Us</li>
           <li>Contact Us</li>
           <li>Cart</li>
         </ul>
       </div>
     </div>
   );

   export default Header