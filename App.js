import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement("h1", {}, "Hello from React JS");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const div = React.createElement("div", { id: "parent" }, [
     React.createElement("div", { id: "child1" }, [
          React.createElement("h1", {}, "Akshay"),
          React.createElement("h2", {}, "Hi... Child 1 I'm h2 Tag")
     ]
     ), React.createElement("div", { id: "child2" }, [
          React.createElement("h1", {}, "Saini"),
          React.createElement("h2", {}, "Hi...Child 2 I'm h2 Tag")
     ]
     )
]
);

root.render(div);