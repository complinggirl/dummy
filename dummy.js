

$(document).ready(function() {

var myGuess;
var mystery;
var tries=0;
var myRand=Math.floor((Math.random() * 100) + 1);



function loopy(myTry){
  alert(myTry);
  alert(myRand);
  tries +=1;
  if (myTry == myRand){
    alert("hey, you win");
    window.location.reload();
  }
  else if (myTry < myRand){
      if(tries===7){
      alert("you ran out of tries, you lose");
      window.location.reload();
      }
      else{
        alert("That's too low, try again. You have "+(7-tries) +" tries left")
      };
  }
  else{
    if(tries===7){
    alert("you ran out of tries, you lose");
    window.location.reload();
    }
    else{
      alert("That's too high, try again. You have "+(7-tries) +" tries left")
      }
    };

};


for(i = 1; i <=25; i++) {
      var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
      $("#one").append($something);
    };
      $('#one').delegate('input[type=button]','click',function(){
      //  alert(this.value);
      //  $(this).css("background", "red");
      //  $(this).attr('disabled', true);
      });



//setting up second tow
for(i = 26; i <=50; i++) {
          var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
          $("#two").append($something);
        };
          $('#two').delegate('input[type=button]','click',function(){
        //  alert(this.value);
        //  $(this).css("background", "red");
        //  $(this).attr('disabled', true);
          });


//setting up third row
for(i = 51; i <=75; i++) {
            var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
            $("#three").append($something);
          };
            $('#three').delegate('input[type=button]','click',function(){
          //  alert(this.value);
          //  $(this).css("background", "red");
          //  $(this).attr('disabled', true);

          });



for(i = 76; i <=100; i++){
              var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
              $("#four").append($something);
            };
              $('#four').delegate('input[type=button]','click',function(){
            //  alert(this.value);
            //  $(this).css("background", "red");
            //  $(this).attr('disabled', true);
           });




           $(document).on('click', ".guess", function(){
                      loopy(this.value);
                       $(this).css("background", "red");
                       $(this).attr('disabled', true);

                    });




});
