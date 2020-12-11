import './index.scss';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import NavMain from "./components/layout/NavMain";
import FooterMain from "./components/layout/FooterMain";
import LoginForm from "./pages/Login/LoginForm";
import SignupForm from "./pages/Signup/SignupForm";
import { ScrollTo } from "react-scroll-to";

const App = () => {
  return (
    <Router>
      <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mon-compte" component={Profile} />
          <Route path="/annonces" component={Offers} />
          <Route component={NotFound} />
        </Switch>
      <ScrollTo className="ScrollSomewhere">
        {({ scroll }) => (
          <button onClick={() => scroll({ x: 20, y: 800, smooth: true })}>Scroll to top</button>
        )}
      </ScrollTo>
      <FooterMain />
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
