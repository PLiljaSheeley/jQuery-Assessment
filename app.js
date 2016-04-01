var numClicks = 0;
var changeClicks = 0;
$(function(){

	
	$("#generate").click(function(){
		numClicks++
		var container = "<div class='container'><p>" + numClicks + "</p><button class = 'delete'>Delete</button><button class='change'>Change</button></div>";
		
		$("body").append(container);

		$(".delete").click(function(){
  			$(this).parent().remove();
  			})
  		$(".change").click(function(){
  			changeClicks++;
  			if(changeClicks%2===0){
  				$(this).parent().css('background', 'yellow');
  			}
  			else{
  				$(this).parent().css('background', 'red');
  			}
  			});
  	});
  	

})