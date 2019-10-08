
import React, { Component } from 'react';
import 'antd/dist/antd'
import {Link} from 'react-router-dom';
import '../index.css';
class Dashboard extends Component{
  render()
  {
    return(
        <div className="App">
         <nav class="navbar navbar-inverse" style={{backgroundColor:'#1545B3',border:'2 px solid #1545B3',color:'#fff'}}>
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" style={{fontSize:20,color:'#FFF'}}>Hip And Knee Step by Step</a>
            <ul className="text-right">
                <li><Link to="/Admin">Admin</Link></li>
                <li><Link to="/Register">User Register</Link></li>
        
            </ul>
          </div>
      
        </div>
         <img src={require('../asset/Capture.PNG')}/>
              </nav>

      <section id="intro" class="clearfix">
      <div class="container">
        <div class="intro-img">
        </div>
  
      
    
  
      </div>
    </section>
        </div>       


 
 
);

}
 
}          
          
  export default Dashboard;
