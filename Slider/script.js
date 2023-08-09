// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
   apiKey: "AIzaSyBa9Jo2bJiYD3LpiCL8UljdBO9Y5IQFOYI",
  authDomain: "anderson-39bae.firebaseapp.com",
  databaseURL: "https://anderson-39bae-default-rtdb.firebaseio.com",
  projectId: "anderson-39bae",
  storageBucket: "anderson-39bae.appspot.com",
  messagingSenderId: "190376735653",
  appId: "1:190376735653:web:ea41c410ef3635167e2e4c",
  measurementId: "G-F0FG5VGGC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var sliderRed = document.getElementById("sliderRed");
var sliderGreen = document.getElementById("sliderGreen");
var sliderBlue = document.getElementById("sliderBlue");

var SelectValueRed = document.getElementById("SelectValueRed"); /* create variable*/
var SelectValueGreen = document.getElementById("SelectValueGreen"); /* create variable*/
var SelectValueBlue = document.getElementById("SelectValueBlue"); /* create variable*/
SelectValueRed.innerHTML = sliderRed.value; /* get value from slider id in HTML but the value unable to change*/
SelectValueGreen.innerHTML = sliderGreen.value; /* get value from slider id in HTML but the value unable to change*/
SelectValueBlue.innerHTML = sliderBlue.value; /* get value from slider id in HTML but the value unable to change*/
//--------------get value from firebase to show it when first run (sync between html and firebase)
var database = firebase.database();
database.ref().on("value", function(snap){      
    sliderBlue.value = snap.val().camera3;           //get value blueValue from firebase and store to  sliderBlue.value
	SelectValueBlue.innerHTML = snap.val().camera3;  //get value blueValue from firebase and store to  SelectValueBlue.innerHTML	
	
	sliderRed.value = snap.val().camera1;           
	SelectValueRed.innerHTML = snap.val().camera1;  
	
	sliderGreen.value = snap.val().camera2;           
	SelectValueGreen.innerHTML = snap.val().camera2;
	
    // change the background based on RGB value
	document.getElementsByClassName('wrapper')[0].style.backgroundColor = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value})`
});
sliderRed.oninput = function(){
    SelectValueRed.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("camera1");
    firebaseRef.set(sliderRed.value);           

}
sliderGreen.oninput = function(){
    SelectValueGreen.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("camera2");
    firebaseRef.set(sliderGreen.value);           

}
sliderBlue.oninput = function(){
    SelectValueBlue.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("camera3");
    //firebaseRef.set(Number(sliderBlue.value));           
    firebaseRef.set(sliderBlue.value);           
}