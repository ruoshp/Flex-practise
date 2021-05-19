import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rushabh from "./pages/rushabh";
import Rakesh from "./pages/rakesh";
import Nilva from "./pages/nilva";
import Nitya from "./pages/nitya";
import Navbar from "./navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/rushabh" component={Rushabh} />

          <Route path="/rakesh" component={Rakesh} />
          <Route path="/nitya" component={Nitya} />
          <Route path="/nilva" component={Nilva} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
