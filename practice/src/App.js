import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rushabh from "./pages/rushabh";
import Nilva from "./pages/nilva";
import Nitya from "./pages/nitya";
import Navbar from "./navbar.js";
import FlexExp from "./pages/rakesh/flexExp"
import gridExp from "./pages/rakesh/gridExp"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/rushabh" component={Rushabh} />
          <Route path="/nitya" component={Nitya} />
          <Route path="/nilva" component={Nilva} />
          <Route path="/flexExp" component={FlexExp} />
          <Route path="/gridExp" component={gridExp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
