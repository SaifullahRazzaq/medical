import React, { Component } from 'react';
import '../App.css'
import { browserhistory } from 'react-router-dom';
import SweetAlert from 'sweetalert-react';
import { Registerfun} from '../Config/Firebase'

class Register extends Component {

    constructor() {
        super();
        this.state =
            {
                email: '',
                password: '',
                show: true


            }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }






    async register() {
        const { email, password } = this.state
    
        try {
             await Registerfun(email, password)
                this.props.history.push('/Login')
    


        } catch (error) {
            console.log(error)
        }




    }
    render() {
        return (
            <div className="App">

                <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
                    <div class="container">
                        <div>
                            <img src={require('../asset/Capture.PNG')} style={{ width: 100, height: 100, marginLeft: -33 }} />
                        </div>
                        <a class="navbar-brand" href="#" style={{ color: "#ffff", fontSize: 20, paddingLeft: 10 }}>Hip And Knee<br />Step By Step</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="#" style={{color:"#ffff"}} onClick={this.props.history.push('/Login')}>Login</a> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <main class="login-form">
                    <div class="cotainer">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header" style={{ color: "black" }}>Register</div>
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

                                                                                      <br />


                                         
                                            <div class="col-md-6 offset-md-4">
                                                <button type="button" class="btn btn-primary" onClick={() => {this.register()}}>
                                                    Register
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
        )


    }



}
export default Register;