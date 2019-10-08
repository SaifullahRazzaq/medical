import React, { Component } from 'react';
import '../App.css'
import { firebase } from '../Config/Firebase';
import { Card } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd/lib/radio';



const { Meta } = Card;
class Mainscreen extends Component {

    constructor() {
        super();
        this.state =
            {
                email: '',
                password: '',
                show: true,
                Image: [],
                count: 0,
                checkbox: false,
                Value: [],
                key:[],


            }
        this.handleChange = this.handleChange.bind(this)
        this.updateObject = this.updateObject.bind(this);
        this.logout=this.logout.bind(this);
    }





    componentDidMount() {
       

    }

    logout()
    {
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
          }, function(error) {
            console.error('Sign Out Error', error);
          });



    }
    Check(e, object) {
        // let checkbox=e.target.checked;
        e.target.checked ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count - 1 })

        //  if(this.state.count==20)
        this.setState({ Value: this.state.Value.concat(object) });
        //  {

        //      document.getElementById('btn').style.display='block';
        //  } 
        //  else
        //  {
        //      document.getElementById("btn").style.display='none';
        //  }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    updateObject() {
    const {Value}=this.state;
    let user=firebase.auth().currentUser.uid;
    firebase.database().ref('Admin/'+user).set(Value).then((success)=>{
console.log("success========>",success)
    }).catch((err)=>{
        console.log(err)
    })
    //   var objectData=[];
    //     let object=data.val();
    //     for(var key in object)
    //     {
    //         console.log("Object wala data ayaaa=====>",object[key])
        
    //     }
    //     objectData.push(object[key])



    //     console.log("objectdata===========>",objectData)
    //     this.setState({key:this.state.key.concat(object[key])})
    //     console.log("key===========>",this.state.key)
    
    
    
    
    // })



    }


    render() {
        const { Image, count, Value } = this.state;
       return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
                    <div class="container">
                        <img src={require('../asset/Capture.PNG')} style={{ width: 100, height: 80 }} />
                        <a className="navbar-brand" href="#">Hip And Knee Step By Step</a>

                        <button className="navbar-toggler" onClick={this.logout}  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">Logout</span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        </div>
                    </div>
                </nav>

                <Meta title="X-Ray Evaluation" description="X-ray Name: 4875038 1X1.jpg" />
                <Card className="card"
                    hoverable
                    cover={<img src={Image[count]} />}>
                    {/* <button onClick={}>Next</button>  */}
                </Card>



                <div class="table-responsive text-nowrap">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Right Lateral</th>
                                <th scope="col">Right Medial</th>
                                <th scope="col">Left Materal</th>
                                <th scope="col">Right Materal</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Normal/Slight</th>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right literal', row: 'normal' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right medial', row: 'normal' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'lefT medial', row: 'normal' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Materal', row: 'normal' }) }}></Checkbox></td>


                            </tr>
                            <tr>
                                <th scope="row">Moderate</th>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Lateral', row: 'Moderate' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right medial', row: 'Moderate' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'lefT medial', row: 'Moderate' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Materal', row: 'Moderate' }) }}></Checkbox></td>
                            </tr>
                            <tr>
                                <th scope="row">NES</th>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Lateral', row: 'NES' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right medial', row: 'NES' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'lefT medial', row: 'NES' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Materal', row: 'NES' }) }}></Checkbox></td>
                            </tr>


                            <tr>
                                <th scope="row">End Stage</th>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Lateral', row: 'End Stage' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right medial', row: 'End Stage' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'lefT medial', row: 'End Stage' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Materal', row: 'End Stage' }) }}></Checkbox></td>
                            </tr>

                            <tr>
                                <th scope="row">Replace</th>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Lateral', row: 'Replace' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right medial', row: 'Replace' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'lefT medial', row: 'Replace' }) }}></Checkbox></td>
                                <td><Checkbox onChange={(e) => { this.Check(e, { column: 'right Materal', row: 'Replace' }) }}></Checkbox></td>
                            </tr>

                            <button id="btn" onClick={this.updateObject} disabled={this.state.count < 20 ? true : false}>Next</button>

                        </tbody>
                    </table>

                </div>



            </div>
        )


    }



}
export default Mainscreen;