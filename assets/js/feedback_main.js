// Initialize Firebase
  var config = {
	apiKey: "AIzaSyDJlZdyG2AIWd6-iiTdK2_tcQ51YN1NaCE",
    authDomain: "team-exocoetus.firebaseapp.com",
    databaseURL: "https://team-exocoetus-default-rtdb.firebaseio.com",
    projectId: "team-exocoetus",
    storageBucket: "team-exocoetus.appspot.com",
    messagingSenderId: "471568291455",
    appId: "1:471568291455:web:2ddcb10ffd3cd28249914a",
    measurementId: "G-2P5K46V4R1"
  };
  firebase.initializeApp(config);

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getValues('name');
	var slide = getValues('slide');
	var message = getValues('message');
	var track = getValues('track');

	ab3ith(name,slide,message,track);

		document.getElementById('contactForm').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function ab3ith(name,slide,message,track){
	var feedback = feedbacks.push();
	feedback.set({
		student: name,
		slide: slide,
		msata: message,
		track: track
	});
}













