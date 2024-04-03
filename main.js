const firebaseConfig = {
  apiKey: "AIzaSyDNvpaCcX9LKVPXNnDEFJl26etHrN8GvEY",
  authDomain: "list-6b67f.firebaseapp.com",
  databaseURL: "https://list-6b67f-default-rtdb.firebaseio.com",
  projectId: "list-6b67f",
  storageBucket: "list-6b67f.appspot.com",
  messagingSenderId: "956812546352",
  appId: "1:956812546352:web:594d7e084a47d17217b8f5"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



getData();


 function addItem(){
  item = document.getElementById("msg").value;

  firebase.database().ref("/").child(item).update({
    purpose : "adding message"
  });

//   firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
//     item = childKey;
// console.log("Item - " + item);
// row = "<div>#"+ item +"</div><hr>";
// document.getElementById("output").innerHTML += row;
// });
// });

getData();
document.getElementById("msg").value = "";
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        item = childKey;
    console.log("Item - " + item);
   row = "<div>#"+ item +"</div><hr>";
document.getElementById("output").innerHTML += row;
 });
});

}


function del(){
  rem = document.getElementById("msg").value;
  //item = rem;
  //console.log(item);
  //firebase.database().ref("/").child(item).remove();
  firebase.database().ref("/").child(rem).remove();
  document.getElementById("msg").value = "";
	
}


function text(){
  console.log(document.getElementById("msg").value);
}
