$(function(){       
  $('#b1').on('click', function(){
    var x = $("#task1").val();
    $("#q1").text(5 * x - 3 * Math.pow(x, 2) + 13);
  }); 
    
$('#task2').on('click', function() {
    var x = $("task2a").val();
    var y = $("task2b").val();
    var z = $("task2c").val();
    $("#q2").text("Hello,"+"x"+"y"+"z");
});
    

});