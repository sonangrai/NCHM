import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/pages/Home";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Helmet>
          <title>NCHM</title>
        </Helmet>
        <div className="app__container">
          <Sidebar />
          <div className="page__container">
            <Header />
            <div className="changable">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contacts" component={Contact} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
