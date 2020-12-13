
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </div>
   </Router>
  );
}

export default App;
