import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Register from '../Component/Register';
import Admin from '../Component/Admin'
import AdminScreen from '../Component/AdminScreen';
import Register from '../Component/Register';
import Log from '../Component/Log';
import MainScreen from '../Component/Mainscreen';
import Screen from '../Component/Screen';
import Dashboard from '../Component/Dashboard';


function Navigation() {
    
      return (
 
        <Router>
        <div>
      
  
             <Switch>
                   
                   <Route exact path='/' component={Dashboard}/>
                   <Route path='/Admin' component={Admin} />
                   <Route path="/AdminScreen" component={AdminScreen}/>
                   <Route path='/Register' component={Register} />
                   <Router path="/Log" component={Log}/>        
                   <Route path="/MainScreen" component={MainScreen}/>
                   <Route path="/Screen" component={Screen}/>

               
               </Switch>
           </div>
           </Router>
         );
       
    }
    
  export default Navigation;