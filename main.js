$( document ).ready(function() {
  let choices = $("#options");
  let list = choices.split(" ");
  let final ="";
  $("#pick").on("click", function (){
    event.preventDefault();
    let n = list.length;
    let x = (Math.floor(Math.random()*n));
    final = list[x];
    $("#lunch").val() = "Your lunch today will be " + final;
  });

  function rnd (n) {
    let num = (Math.floor(Math.random() * n) +1);
    return n;
  }
});
