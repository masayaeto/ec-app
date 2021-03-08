
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Top from './components/pages/Top';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
