$( document ).ready(function() {
  $("#pick").on("click", function (){
    event.preventDefault();
    let choices = $("#options").val().split(" ");
    if (choices.length < 2){
      $("#zero").removeClass("hide");
    } else {
      let n = choices.length;
      let x = (Math.floor(Math.random()*n));
      $("#lunch").text("Your lunch today will be " + choices[x] + "!");
      $("#zero").addClass("hide");
      $("#thank").removeClass("hide");
    }
  });
});
