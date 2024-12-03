import React from "react";
import ReactDOM from "react-dom/client";

const title = <h2>Veda.......</h2>;
//const heading = React.createElement("h1", {}, "Hello from React JS");
//const heading1 = <h1 id="heading1">Hi Namaste Reach JSX 1</h1>;
const heading2 = (
  <h1 id="heading2">
    {title}
    Hi Namaste Reach JSX 2
  </h1>
);

const HeaderComponent = () => (
  <div className="container" tabIndex="4">
    {title}
    {500 - 100}
    <h1 id="heading1"> Hi Namaste Reach Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading1);
//root.render(heading2);
root.render(<HeaderComponent />);
