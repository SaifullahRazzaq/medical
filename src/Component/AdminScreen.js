import React, { Component } from 'react';
import '../App.css';
import { UploadImage } from '../Config/Firebase';
class AdminScreen extends Component {
    constructor() {
        super()

        this.state =
            {

                email: '',
                password: '',
                RightLiteral:'',
                RightMedial:'',
                LeftLiteral:'',
                LeftMedial:''

            }
        this.upload = this.upload.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      
    }
    async upload() {
        const {RightLiteral,RightMedial,LeftLiteral,LeftMedial}=this.state;
      console.log("Right L====>",RightLiteral) 
      console.log("Right M====>",RightMedial) 
      console.log("Right L====>",LeftLiteral) 
      console.log("Left M====>",LeftMedial) 
        
        try {
            var img = document.querySelector("#img").files[0];
            return await UploadImage(img,RightMedial,RightLiteral,LeftLiteral,LeftMedial)

        } catch (error) {
            console.log(error.message)
        }

    }

    render() {
        return (
            <div>

                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Hip And Knee Step by Step</a>
                        </div>

                    </div>
                </nav>




                <div class="form-group row">
                    <label for="Right Literal" class="col-md-4 col-form-label text-md-right" >Right Literal</label>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange} value={this.state.RightLiteral} name="RightLiteral" id="password" placeholder="Enter a Right Literal" class="form-control" />
                    </div>
                </div>


                <div class="form-group row">
                    <label for="Right Medial" class="col-md-4 col-form-label text-md-right">Right Medial</label>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange} value={this.state.RightMedial} name="RightMedial" id="password" placeholder="Enter a Right Medial" class="form-control" />
                    </div>
                </div>



                <div class="form-group row">
                    <label for="Left Miteral" class="col-md-4 col-form-label text-md-right">Left Literal</label>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange} value={this.state.LeftLiteral} name="LeftMiteral" id="password" placeholder="Enter a Left Miteral" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">LeftMedial</label>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange} value={this.state.LeftMedial} name="LeftMedial" id="password" placeholder="Enter a LeftMiteral" class="form-control" />
                    </div>
                </div>



                <div class="form-group text-right">
                    <input type="file" id="BSbtndanger"  class="form-control" id="img" />
<br/>
                    <button className='btn btn-primary' onClick={this.upload}>Upload</button>
                </div>



            </div>

        )
    }
}
export default AdminScreen;