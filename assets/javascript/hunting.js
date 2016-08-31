// Initialize Firebase
    var config = {
      apiKey: "AIzaSyBEqFl3BXnWkAUERtW56Kd8uCh5TAw3XBY",
      authDomain: "dating-go.firebaseapp.com",
      databaseURL: "https://dating-go.firebaseio.com",
      storageBucket: "dating-go.appspot.com",
    };
    firebase.initializeApp(config);

// Create a variable to reference the database.

var database = firebase.database()  
var users= [];
var usersID = [];
//var selectedUser;

loadusers = function() {

  //reference to the /users database path.
  this.usersRef = this.database.ref('users');
  //make sure we remove all previous listeners.
  this.usersRef.off();
  var setuser = function(data) {
    var val = data.val();
    users.push(val);
    console.log(val);

    populate = function(){
      var count;
    // sets max and min location of pokemon for the map 
    var x = Math.max(20, Math.min(60, Math.ceil(Math.random() * 100)));
    var y = Math.max(10, Math.min(50, Math.ceil(Math.random() * 100)));  
   // Creates div and appends to map
   var pokeDiv = $('<div>').css({
        position: 'absolute',
        width: '100px',
        height: '100px',
        top: y + '%',
        left: x + '%',
    }).html(val.username +"<img src="+val.favpokeimg+">").appendTo('#pleaseWork');
   pokeDiv.attr("data-num", val.ID);
   pokeDiv.addClass("pokemon");
   pokeDiv.attr("id", val.ID);
   console.log(val.ID);
   count++

    };
    populate();
  }.bind(this);
  this.usersRef.limitToLast(4).on('child_added', setuser);
  this.usersRef.limitToLast(4).on('child_changed', setuser);
};
console.log(users);


loadusers();

$(document).ready(function() { 

  $(document.body).on('click', '.pokemon', function(){
      
    // Get the Number of the button from its data attribute.
    var pokeNumber = $(this).data("num");
     localStorage.setItem("selectedUser", pokeNumber);
    //selectedUser = users[pokeNumber];
    document.location.href = "userProfile.html";

});
  // Don't refresh the page!
  return false;
  });
    






