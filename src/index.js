import React from "react";
import ReactDOM from "react-dom";
import MainMenu from "./MainMenu/MainMenu";
import Tab from "./shared/Tab";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const navStyle = {
  backgroundColor: "#DEDEDE",
  position: "absolute",
  bottom: 0,
  width: "100%",
  border: "1px solid black",
};

const ulStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/calculator"></Route>
        <Route path="/info"></Route>
        <Route path="/trucks"></Route>
        <Route path="/user"></Route>
        <Route path="/">
          <MainMenu />
        </Route>
      </Switch>
      <div style={navStyle}>
        <ul style={ulStyle}>
          <li className="nav-item">
            <Link to="/calculator">
              <Tab
                text="Beregn LTP"
                imgAlt="LTP"
                imgSrc="https://icons-for-free.com/iconfiles/png/512/calculator-131964784712013007.png"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trucks">
              <Tab
                text="Vogner"
                imgAlt="Vogner"
                imgSrc="https://image.flaticon.com/icons/png/512/45/45880.png"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Tab
                text="Home"
                imgAlt="Home"
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png"
              />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/user">
              <Tab
                text="Bruker"
                imgAlt="Bruker"
                imgSrc="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info">
              <Tab
                text="Info"
                imgAlt=""
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"
              />
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);
