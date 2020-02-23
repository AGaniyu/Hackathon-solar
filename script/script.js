//auth section

var userId = localStorage.getItem("userId");
var noAuthElements = document.getElementsByClassName("not-authorized");
var authElements = document.getElementsByClassName("auth");

Array.from(authElements).forEach(element => {
  element.style.display = userId ? "block" : "none";
});

Array.from(noAuthElements).forEach(element => {
  element.style.display = userId ? "none" : "block";
});


function signOut() {
  localStorage.removeItem("userId");
}

//auth section

function openSearch() {
  console.log("mesego")
  document.getElementById("myOverlay").style.display = "block";
}

//   function closeSearch() {
//     document.getElementById("myOverlay").close();
//   }


function register() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  var passwordRepeated = document.getElementById("psw-repeat").value;

  if (password === passwordRepeated) {
    var url = "https://cors-anywhere.herokuapp.com/d1aab37b.ngrok.io/user/register";


    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password
      })
    }).then(function (response) { return response.json() }).then(function (response) {

      localStorage.setItem("userId", response.studentId)
      history.back()
    });

    console.log(studentId, email, username, password, passwordRepeated)
  } else {
    console.log("password:", password)
    console.log("repeated:", passwordRepeated)
    console.log("Passwords you provided are different!")
  }
}

function login() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  var url = "https://cors-anywhere.herokuapp.com/d1aab37b.ngrok.io/user/login";

  fetch(url, {
    username: username,
    password
  }).then(function (r) { return r.json() }).then(function (response) {
    localStorage.setItem("userId", response.studentId);
    location.replace("index.html");
  });

  console.log(username, password)
}

function add() {
  var groupname = document.getElementById("coursename").value;
  var url = "https://cors-anywhere.herokuapp.com/d1aab37b.ngrok.io/user/groups";

  fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      groupname: group_name
    })
  }).then(function (response) { return response.json() }).then(function (response) {

    // localStorage.setItem("userId", response.studentId)
    // history.back()
  });

}


// var storage = window.localStorage;
// var uname = storage.getItem('uname');
// if(uname != null){
//  window.location="index.html";
// }


// $(document).ready(function() {
//   $("#insert").click(function() {
//       var uname = $("#uname").val();
//       var pass = $("#pass").val();
//       var mail = $("#mail").val();
//       var validateString = "uname=" + uname + "&mail="+ mail +"&insert=";
//       var dataString = "uname=" + uname + "&pass=" + pass + "&mail=" + mail + "&insert=";
//       if ($.trim(uname).length > 0 & $.trim(pass).length > 0 & $.trim(mail).length > 0) {
//           $.ajax({
//               type: "POST",
//               url: "#",
//               data: validateString,
//               crossDomain: true,
//               cache: false,
//               beforeSend: function() {
//                   $("#insert").val('Connecting...');
//               },
//               success: function(data) {
//                   if (data == "success") {
//                   $.ajax({
//               type: "POST",
//               url: "#",
//               data: dataString,
//               crossDomain: true,
//               cache: false,
//               beforeSend: function() {
//                   $("#insert").val('Connecting...');
//               },
//               success: function(data) {
//                   if (data == "success") {

//                       $("#insert").val('Register');
//                       alert("User registered!");
//                   } else if (data == "error") {
//                       alert("error");
//                   }
//               }
//           });                                   
//                   } else if (data == "error") {

//                       $("#insert").val('Register');
//                       alert("Mail or username already in use!");
//                   }
//               }
//           });
//       }
//       return false;
//   });
// });
