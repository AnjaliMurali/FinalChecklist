const firebaseConfig = {
  apiKey: "AIzaSyDh07ospSe5sv_5w7eM4_E52h9CvoD3JqY",
  authDomain: "checklist-547c1.firebaseapp.com",
  databaseURL: "https://checklist-547c1-default-rtdb.firebaseio.com",
  projectId: "checklist-547c1",
  storageBucket: "checklist-547c1.appspot.com",
  messagingSenderId: "203935172439",
  appId: "1:203935172439:web:06f1cb9d95e4640cff2012"
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
