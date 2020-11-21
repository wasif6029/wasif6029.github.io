



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCADai_E23X2smIQeKDlJ8oOAjjLQL6FmE",
    authDomain: "intronew-5c4c5.firebaseapp.com",
    databaseURL: "https://intronew-5c4c5.firebaseio.com",
    projectId: "intronew-5c4c5",
    storageBucket: "intronew-5c4c5.appspot.com",
    messagingSenderId: "147122485998",
    appId: "1:147122485998:web:1240746d36de0546d111ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




var database = firebase.database();

var ref = database.ref('comment');

document.getElementById("message").value = "";
document.getElementById("email").value = "";
document.getElementById("name").value = "";



function fetchFromDb(idNameForm)
{
    database.ref('comment').once('value',   function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          //var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            //console.log(childKey);
            //console.log(childData);
            var name = childData['name'];
            var comment = childData['comment'];
            var id = childData['id'];
            if(id==idNameForm) makeComment(name, comment);
        });
    });
}








function myFunction(str) {
    var cname = document.getElementById("name").value.trim();
    console.log(cname);
    var cmail = document.getElementById("email").value.trim();
    console.log(cmail);
    var cment = document.getElementById("message").value.trim();
    if (typeof cment === 'undefined') 
    {
        alert("Please leave a comment.");
        return;
    }
    console.log(cment);





    if (cname == "") {
        alert("Please enter your name.");
        return;
    }
    if (cmail == "") {
        alert("Please enter your Email.");
        return;
    }
    if (cment === null || cment == "") {
        alert("Please leave a comment.");
        return;
    }
    if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(cmail))) {

    }
    else {
        alert("Invalid Email!")
        return;
    }
    var data = {
        id :  str,
        name: cname,
        email: cmail,
        comment: cment
    }
    ref.push(data);
    
    alert("Your message has been sent.");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    makeComment(cname,cment);

}











function makeComment(name, comment)
{
    
    console.log("innnnn");
    var para = document.createElement("P");
    para.appendChild(document.createTextNode(comment));

    var hf = document.createElement("H4");
    hf.appendChild(document.createTextNode(name));

    var icn = document.createElement("I");
    icn.className = "fa fa-user";

    var comment_text = document.createElement("DIV");
    comment_text.className = "icon-box mt-5-text";

    var br = document.createElement("BR");
    


    console.log("innnnn2222");

    comment_text.appendChild(icn);
    comment_text.appendChild(hf);
    comment_text.appendChild(para);
    comment_text.appendChild(br);
    comment_text.appendChild(br);


    console.log(comment_text);

    
    

    var whole = document.querySelector("#comment_now");
    whole.appendChild(comment_text);

   // comment_form.reset();

}

























