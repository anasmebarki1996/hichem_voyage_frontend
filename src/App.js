import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Footer from "./components/Footer/Footer";
import Voyages from "./screens/Voyages/Voyages";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/voyages">
            <Voyages />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
