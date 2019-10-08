import React,{Component} from 'react';
import {getAllImages} from '../Config/Firebase'


class UploadImages extends Component{
  constructor()
  {
    super();
    this.state={

    }

  }

 async componentDidMount()
  {
  try {
    return await getAllImages();
  } catch (error) {
    console.log(error.message)
  }
    
  }
  render()
  {
  return(
    <nav class="navbar navbar-expand-lg navbar-light navbar-laravel" style={{backgroundColor:'#3B4DC8'}}>
    <div class="container">
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
      )
}
}
export default UploadImages;