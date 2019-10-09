import React, { Component } from 'react';
import '../App.css'
import { firebase } from '../Config/Firebase';
import { Card } from 'antd';
import { Checkbox } from 'antd';




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
                checkedboxes: 0,
                checkbox: false,
                Value: [],
                EvaluationList: [],
                currentImageName: '',
                currentDescription: '',
                cureentLeftLiteral: '',
                currentLeftMedial: '',
                currentRightLiteral: '',
                currentRightMedial: '',
                imageurl: '',




            }
        this.handleChange = this.handleChange.bind(this)
        this.updateObject = this.updateObject.bind(this);
        this.logout = this.logout.bind(this);
        this.mapData = this.mapData.bind(this);
    }



    componentDidMount() {
        const getdata = [];
        firebase.database().ref('Admin').once("value", (data) => {
            var Evaluationdata = data.val();
            for (var key in Evaluationdata) {

                getdata.push(Evaluationdata[key])
            }

        }).then(() => {

            this.setState({ EvaluationList: getdata })
            const { count, EvaluationList } = this.state
            if (this.state.EvaluationList.length > 0) {
                var Name = EvaluationList[count].ImageName
                var description = EvaluationList[count].Description
                var Lliteral = EvaluationList[count].LeftLiteral
                var lMedial = EvaluationList[count].LeftMedial
                var Rliteral = EvaluationList[count].RightLiteral
                var RMedial = EvaluationList[count].RightMedial
                var url = EvaluationList[count].imageurl


                this.setState({
                    currentImageName: Name,
                    currentDescription: description,
                    cureentLeftLiteral: Lliteral,
                    currentLeftMedial: lMedial,
                    currentRightLiteral: Rliteral,
                    currentRightMedial: RMedial,
                    imageurl: url
                })

            }
            else {
                console.log("error")
            }


        })

    }

    logout() {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
        }, function (error) {
            console.error('Sign Out Error', error);
        });



    }
    Check(e, object) {
        // let checkbox=e.target.checked;
        e.target.checked ? this.setState({ checkedboxes: this.state.checkedboxes + 1 }) : this.setState({ checkedboxes: this.state.checkedboxes - 1 })
        this.setState({ Value: this.state.Value.concat(object) });

    

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    mapData() {
 console.log("count====>",this.state.count)
        const { EvaluationList, count } = this.state;
        console.log("EvaluationList", EvaluationList)
        if (this.state.EvaluationList.length > count) {
            var Name = EvaluationList[count].ImageName
            var description = EvaluationList[count].Description
            var Lliteral = EvaluationList[count].LeftLiteral
            var lMedial = EvaluationList[count].LeftMedial
            var Rliteral = EvaluationList[count].RightLiteral
            var RMedial = EvaluationList[count].RightMedial
            var url = EvaluationList[count].imageurl

            console.log("Name=======>", Name)
            console.log(" description=======>", description)
            console.log(" Lliteral=======>", Lliteral)
            console.log("Rliteral=======>", Rliteral)
            console.log(" RightMedial=======>", RMedial)
            console.log("url===========>", url)


            this.setState({
                currentImageName: Name,
                currentDescription: description,
                cureentLeftLiteral: Lliteral,
                currentLeftMedial: lMedial,
                currentRightLiteral: Rliteral,
                currentRightMedial: RMedial,
                imageurl: url
            })
            this.setState({
                count: this.state.count + 1,
                checkedboxes:false,
                checkbox:' '

            })
        }
        else {
            console.log("error")
        }



    }


    updateObject() {
        const { Value } = this.state;
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref('Admin/' + user).set(Value).then((success) => {
            console.log("success========>", success)
        }).catch((err) => {
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
        const { imageurl, cureentLeftLiteral, currentDescription, currentImageName, currentLeftMedial, currentRightMedial, currentRightLiteral } = this.state;

        return (


            <div>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Hip And Knee Step by Step</a>
                            <div style={{ float: "right", flex: 1, fontSize: 12 }}>
                                <a className="navbar-brand" href="#" onClick={this.logout} style={{ float: "right", flex: 1, fontSize: 12 }}>>Logout</a>
                            </div>
                        </div>

                    </div>
                </nav>




                <div>
                    <p style={{ float: "left", flex: 1, fontSize: 12 }}>ImageName:   {currentImageName}</p>
                </div>

                <div style={{ float: "Right", flex: 1, fontSize: 12 }} >
                    <p >Description:   {currentDescription}</p>
                </div>
                <center>
                    <Card
                        hoverable
                        style={{ width: 200 }}
                        cover={<img alt="example" src={imageurl} />}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    </Card>
                </center>



                <div className="table-responsive text-nowrap">

                    <table className="table">
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


                        </tbody>
                    </table>
                    <button id="btn"
                        className="btn btn-primary"
                        onClick={this.mapData}
                        disabled={this.state.checkedboxes < 4 ? true : false}>Next</button>
                </div>





            </div>
        )


    }



}
export default Mainscreen;