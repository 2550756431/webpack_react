import './App.css';
import { Switch , HashRouter, Route } from 'react-router-dom';
import Home from "./Home/index.js";
import NewsFeed from "./NewsFeed/index.js"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsFeed} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
