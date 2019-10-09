import React, { Component } from 'react';
import '../App.css';
import { UploadImage } from '../Config/Firebase';
import Swal from 'sweetalert2';
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
                LeftMedial:'',
                ImageName:'',
                Description:'',
                
            }
            this.upload = this.upload.bind(this);
            this.handleChange=this.handleChange.bind(this);
            this.logout=this.logout.bind(this);
           
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      
    }
    async upload() {
        const {RightLiteral,RightMedial,LeftLiteral,LeftMedial,ImageName,Description}=this.state;
console.log(Description)
            if(RightLiteral !=='' || RightMedial !=='' || LeftLiteral !=='' ,LeftMedial !=='' ,ImageName !=='', Description !=='')
            {
            var img = document.querySelector("#img").files[0];
            await UploadImage(img,RightMedial,RightLiteral,LeftLiteral,LeftMedial,ImageName,Description)
            Swal.fire({
                title: 'Success!',
                text: 'Upload Successfully',
                type: 'success',
                confirmButtonText: 'Cool'
             
            })
        }
        
            else{
                Swal.fire({
                    title:"Please fill out the document",
                    text: 'Upload Unsuccessfull',
                    type: 'error',
                    confirmButtonText: 'Bad'
                })
            } 
    
    }
    logout()
    {
        Swal.fire({
            title: 'Success!',
            text: 'Logout  Successfully',
            type: 'success',
            confirmButtonText: 'Cool'
         
        })
            this.props.history.push('/Admin')
    }

    render() {
       
        return (
            <div>

                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Hip And Knee Step by Step</a>
                            <a class="navbar-brand" href="#" style={{paddingLeft:1020}} onClick={this.logout}>Logout</a>
                        </div>

                    </div>
                </nav>



                <div class="form-group row">
                    <label for="Right Literal" class="col-md-4 col-form-label text-md-right" >X-Ray-Image Name</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.ImageName} name="ImageName" id="password" placeholder="Enter a ImageName" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="Right Literal" class="col-md-4 col-form-label text-md-right" >Description</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.Description} name="Description" id="password" placeholder="Enter a Description" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="Right Literal" class="col-md-4 col-form-label text-md-right" >Right Literal</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.RightLiteral} name="RightLiteral" id="password" placeholder="Enter a Right Literal" class="form-control" />
                    </div>
                </div>



                <div class="form-group row">
                    <label for="Right Medial" class="col-md-4 col-form-label text-md-right">Right Medial</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.RightMedial} name="RightMedial" id="password" placeholder="Enter a Right Medial" class="form-control" />
                    </div>
                </div>



                <div class="form-group row">
                    <label for="Left Miteral" class="col-md-4 col-form-label text-md-right">Left Literal</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.LeftLiteral} name="LeftLiteral" id="password" placeholder="Enter a Left Miteral" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">LeftMedial</label>
                    <div class="col-md-12">
                        <input type="text" onChange={this.handleChange} value={this.state.LeftMedial} name="LeftMedial" id="password" placeholder="Enter a LeftMiteral" class="form-control" />
                    </div>
                </div>



                <div class="form-group row">
                <label for="Left Miteral" class="col-md-4 col-form-label text-md-right">Select</label><br/>
                <div class="col-md-12">
                    <input type="file" id="BSbtndanger"  class="form-control" id="img" />
</div>
                </div>
                    <button className='btn btn-primary text-right' onClick={this.upload} >Upload</button>



            </div>

        )
    }
}
export default AdminScreen;