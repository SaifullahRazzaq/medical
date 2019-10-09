import React,{Component} from 'react';
import '../App.css';
import {Registerfun} from '../Config/Firebase';
import Swal from 'sweetalert2';

class Admin extends Component{
    constructor(){
        super()
        
        this.state=
        {
            
            email:'',
            password:''
            
        }
        this.handleChange = this.handleChange.bind(this)
        const Swal = require('sweetalert2')
}



handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })

}

async Signin()
{
    const {email,password}=this.state;
    await Registerfun(email,password)
    Swal.fire({
        title: 'Success!',
        text: 'Login Successfully',
        type: 'success',
        confirmButtonText: 'Cool'
      }).then(()=>{

          return this.props.history.push('/AdminScreen');
      }).catch(()=>{
        Swal.fire({
            title:"Something Went Wrong Try again",
            text: 'Login Error',
            type: 'Error',
            confirmButtonText: 'Cool'
          })
      })


}

render()
{
    return(
  <div>

  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Hip And Knee Step by Step</a>
    </div>

  </div>
        </nav>
       
 
<div className="Admin" style={{paddingLeft:250}}>
    <img src={require('../asset/admin.jpg')} width="200" height="200"  style={{marginLeft:320}}/><br/><br/>/>
<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <form action="" method="">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right" style={{ color: "#ffff" }}>E-Mail Address</label>
                                <div class="col-md-6">
                                    <input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" class="form-control" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right" style={{ color: "#ffff" }}>Password</label>
                                <div class="col-md-6">
                                    <input type="password" onChange={this.handleChange} value={this.state.password} name="password" id="password" placeholder="Password" class="form-control" />
                                </div>
                            </div>


                            <div class="col-md-10 offset-md-4 text-right">
                                <button type="button" class="btn btn-primary" onClick={() => {this.Signin()}}>
                                    Signin
                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
</div>

  </div>
    
    )
}
}
export default Admin;