
var firebaseConfig = {
      apiKey: "AIzaSyDKkkpO0tzmvRmeEHF3jO19HlmRV1fwoMw",
      authDomain: "kwitter-930ae.firebaseapp.com",
      projectId: "kwitter-930ae",
      storageBucket: "kwitter-930ae.appspot.com",
      messagingSenderId: "796107622277",
      appId: "1:796107622277:web:245e4976c56fbd25d0a6ec"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
