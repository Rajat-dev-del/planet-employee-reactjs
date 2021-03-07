import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home.js'
import Jobseeker from './components/pages/jobSeeker.js'
import CurriculamVitae from './components/pages/curriculamVitae.js'
import $ from "jquery";

import './assets/css/style.css';

function App() {
  return (
    <div className="App">
    <Router>
       <div>
         <Route exact path="/" component={Home}/>
         <Route exact path="/jobSeeker" component={Jobseeker}/>
         <Route exact path="/curriculamVitae" component={CurriculamVitae}/>
       </div>
    </Router>
      
    </div>
  );
}

export default App;
