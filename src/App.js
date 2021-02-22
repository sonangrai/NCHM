import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="app__container">
          <Sidebar />
          <div className="page__container">
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;