var firebaseConfig = {
      apiKey: "AIzaSyB_-RqqVyL_VtX8OQuRGCG-P1AL32jQ9ts",
      authDomain: "kwitter-71772.firebaseapp.com",
      databaseURL: "https://kwitter-71772-default-rtdb.firebaseio.com",
      projectId: "kwitter-71772",
      storageBucket: "kwitter-71772.appspot.com",
      messagingSenderId: "954306763397",
      appId: "1:954306763397:web:39bf22c8c1b2e0d65b67ec"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose: "To add the room"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName'(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
