import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
