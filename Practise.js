import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "H1 Tag"),
  React.createElement("h2", {}, "H2 Tag"),
  React.createElement("h3", {}, "H3 Tag"),
]);

const titleEle = (
  <div id="title">
    <h1>h1 tag from ele</h1>
    <h2>h2 tag from ele</h2>
    <h3>h3 tag from ele</h3>
  </div>
);

const TitleComponent = () => (
  <>
  <>
  <div id="title" className="header">
    {titleEle}
    <h1>h1 tag</h1>
    <h2>h2 tag</h2>
    <h3>h3 tag</h3>
  </div>
  </>
  <></>
  </>
);

const HeaderComponent = () => {
  return (
    <div id="header">
      <div className="logo">
        <img
          src="https://cdn.dribbble.com/users/1070235/screenshots/5325568/lightning_sewer.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="searchBar">
        <input type="text" />
      </div>
      <div className="userIcon">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s"
          alt="userIcon"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};
root.render(TitleComponent());

root.render(<HeaderComponent></HeaderComponent>);
