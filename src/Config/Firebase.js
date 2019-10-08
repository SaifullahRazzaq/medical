import React,{Component} from 'react';
import * as firebase from 'firebase';
import 'firebase/storage';
import { userInfo } from 'os';
import { all, reject } from 'q';
import { isImageUrl } from 'antd/lib/upload/utils';
var firebaseConfig = {
    apiKey: "AIzaSyBj5EzLKRZIvVF8f7A7lJO8VwO_L-IDrDk",
    authDomain: "medicalapp-96d0a.firebaseapp.com",
    databaseURL: "https://medicalapp-96d0a.firebaseio.com",
    projectId: "medicalapp-96d0a",
    storageBucket: "medicalapp-96d0a.appspot.com",
    messagingSenderId: "603411143845",
    appId: "1:603411143845:web:888a18c286ec8c3641c14c",
    measurementId: "G-L27051DCMZ"
  };




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  var database=firebase.database();
  var db=firebase.firestore();


  function UploadImage(img,RightMedial,RightLiteral,LeftLiteral,LeftMedial)
  {
let storageRef = firebase.storage().ref().child(`userimages/${img.name}`)
  storageRef.put(img)
  .then((snapshot) => {
      snapshot.ref.getDownloadURL().then((sanpUrl) => {
          //url yahan se milega sanpurl
          var imageurl=sanpUrl;
          console.log(sanpUrl)
     var Image =
     {
          imageurl,
          RightLiteral,
        RightMedial,
        LeftMedial,
        LeftLiteral
    }
    var key=firebase.database().ref('Admin/').push(Image).key;
      console.log("successs========>",key)
     
      })
  }) 
  
  }


  function Registerfun(email,password)
  {
   
    firebase.auth().createUserWithEmailAndPassword(email,password).then((user=>{
        console.log("user=========>",user)
          
      
    }))
            }

function savedata(email,password,img)
{
    console.log("firebase wala chala")
    var userobject={
        email,
        password,
        img
       }
    try {
        var key=firebase.database().ref('Userinfo/').push(userobject).key;
        console.log("message=========>",key);
     
    } catch (error) {
    console.log(error.message)    
    }
           
           
           
       
      
}


function Loginfun(email,password)
{
    firebase.auth().signInWithEmailAndPassword(email,password).then((userinfo=>{
        console.log("userinfo=========>",userinfo)
    }))
}
function getAllImages()
{

}

  export {
      Registerfun,
      Loginfun,
      getAllImages,
      storage,
      firebase,
      UploadImage
    }