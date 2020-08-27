import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Form from './components/Form';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <>
   <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/CoronaAssessment" component={Home}/>
    <Route path="/form" component={Form}/>
    <Route path="/contacts" component={Contacts}/>
   </>
  );
}

export default App;
