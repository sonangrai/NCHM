import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/pages/Home";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Careers from "./components/pages/Careers";
import Login from "./components/pages/Login";
import ShortCourses from "./components/pages/ShortCourses";

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
                <Route exact path="/login" component={Login} />
                <Route exact path="/contacts" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/careers" component={Careers} />
                <Route exact path="/short" component={ShortCourses} />
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
