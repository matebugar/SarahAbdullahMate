$(document).ready(function(){


//$('.box').click(function(){ 
    //	$(".boxMes").text("The box was clicked.");
    //	});
//$('.santa').click(function(){ 
    //	$(".santaMes").text("The santa was clicked.");
    //	});


$("div div").click(function() {
       $(this).find("img").hide( 2000);
        $(this).find("p").html("Something Useful");
       //$(this).find(".sant").text("dgshj");
       
 		

 });

 });