import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading", xyz: "abc" }, "Welcome"),
    React.createElement("h2", {}, "Hello World from React!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading", xyz: "abc" }, "Welcome"),
    React.createElement("h2", {}, "Hello World from React!"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
