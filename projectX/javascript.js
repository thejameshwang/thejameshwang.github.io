$(function(){
  .on('click',$(function(e){
    $('.title').replaceWith("<h6>hi</h6>");
    
}))       
    
}

fuction alertUser(e){
    alert("You clicked this at" + e.timeStamp)l;
}  

)

$(function(){
    $('.title').on('click',function(e){
        alertUser(e)
    });
});