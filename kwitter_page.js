var firebaseConfig = {
      apiKey: "AIzaSyDKkkpO0tzmvRmeEHF3jO19HlmRV1fwoMw",
  authDomain: "kwitter-930ae.firebaseapp.com",
  databaseURL: "https://kwitter-930ae-default-rtdb.firebaseio.com",
  projectId: "kwitter-930ae",
  storageBucket: "kwitter-930ae.appspot.com",
  messagingSenderId: "796107622277",
  appId: "1:796107622277:web:245e4976c56fbd25d0a6ec"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

