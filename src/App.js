import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Promo from './pages/Promo'
import Terms from './pages/Terms'
import Updates from './pages/Updates'
import Contact from './pages/Contact'
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/promo' component={Promo} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/updates' component={Updates} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    )
  }
}

export default App