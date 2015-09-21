$(document).ready(function() {

  var myGuess;
  var mystery;
  var tries = 0;
  var myRand = Math.floor((Math.random() * 100) + 1);



  function loopy(myTry){

    tries += 1;

    if (myTry == myRand){
      alert("hey, you win");
      window.location.reload();
    }
    else if (myTry < myRand){
      if(tries === 7){
        alert("you ran out of tries, you lose");
        window.location.reload();
      }
      else{
        alert("That's too low, try again. You have "+(7 - tries) +" tries left");
      }
    }
    else{
      if(tries === 7) {
        alert("you ran out of tries, you lose");

        // avoid window reload
        window.location.reload();

        // reset data "manually"
        // make the data reset a separate function
      }
      else {
        alert("That's too high, try again. You have "+ (7 - tries) +" tries left");
      }
    }
  }


  // append new element to #one, then #two, etc.
  var divNumber = "one";
  for(i = 1; i <= 100; i++) {
    var $something = $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});

    if (i > 25) {
      divNumber = "two";
    }

    if (i > 50) {
      divNumber = "three";
    }

    if (i > 75) {
      divNumber = "four";
    }

    $("#" + divNumber).append($something);
  }

  $(document).on('click', ".guess", function(){
    loopy(this.value);
    $(this).css("background", "red");
    $(this).attr('disabled', true);
  });

});


// create all elements
// define listener
// apply listener to those elements by adding a class

// how to avoid alert box
// change a notification div's text instead of alert