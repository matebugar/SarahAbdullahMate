$(document).ready(function(){
$("*").css("background","grey");
var item = grocery;

for(i=0; i < item.length; i++) {
	console.log(item[i].name);
	if (item[i].count <= 5) {
		$('#test').append("<div class='red'><p>Name: "+ item[i].name + "</p><p>Price: " + item[i].price + "</p><p>Count: " + item[i].count + "</p><p><img width='100px' height='100px' src='item" +(i+1)+ ".png'></p></div>");
		//$("div : contains ('Tomato')").css("background","red");
	}
	else if (item[i].count <= 10) {
		$('#test').append("<div class='yellow'><p>Name: "+ item[i].name + "</p><p>Price: " + item[i].price + "</p><p>Count: " + item[i].count + "</p><p><img width='100px' height='100px' src='item" +(i+1)+ ".png'></p></div>");
		//$("div : contains ('Tomato')").css("background","red");
	}
	else {$("#test").append( "<div><p>Name: "+ item[i].name + "</p><p>Price: " + item[i].price + "</p><p>Count: " + item[i].count + "</p><p><img width='100px' height='100px' src='item" +(i+1)+ ".png'></p></div>");
	}};

//$("item.na").css("background", "green");
$(".red").css("background-color","red");
$(".yellow").css("background-color","yellow");
$("#test").css('display','flex');
$("#test").css('justify-content','space-around');

});



