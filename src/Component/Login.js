import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router';
import SweetAlert from 'sweetalert-react';
import { Loginfun } from '../Config/Firebase'
class Login extends Component {

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






    async Login() {
        const { email, password } = this.state
        try {
            return await Loginfun(email, password)




        } catch (error) {

console.log(error.message)
}

    }
    render() {
        console.log(this.props)
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
                    <div class="container">
                        <img src={require('../asset/Capture.PNG')} style={{ width: 100, height: 70 }} />
                        <a class="navbar-brand" href="#">Hip And Knee Step By Step</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.props.history.push('')}>Register</a>
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
                                    <div class="card-header">Login</div>
                                    <div class="card-body">
                                        <form action="" method="">
                                            <div class="form-group row">
                                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                <div class="col-md-6">
                                                    <input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                                <div class="col-md-6">
                                                    <input type="password" onChange={this.handleChange} value={this.state.password} name="password" id="password" class="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="col-md-6 offset-md-4">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="remember" />Remember Me
                                        </label>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-md-6 offset-md-4">
                                                <button type="button" class="btn btn-primary" onClick={() => { this.Login() }}>
                                                    Login
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
export default Login;