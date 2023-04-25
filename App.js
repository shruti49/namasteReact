const root = ReactDOM.createRoot(document.getElementById("root"));
/*
<div id="parent">
    <div id="child1">
    <h1></h1>
    <h2></h2>
    </div>
        <div id="child2">
    <h1></h1>
    <h2></h2>
    </div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
]);

root.render(parent);
