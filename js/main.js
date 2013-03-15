$(document).ready(function() {
	
	var $lista = 0;


	$(document).on("keydown", '#input_text', function(event) {	
		
		var element = $("#input_text");
	
		// if enter
		if (event.which == 13) {
			event.preventDefault();
		}			
		// if dot
		else if(event.which == 188)	{
			value = element.val();
			
			element.parent().remove();
			
			$(".adding-list").append("<li class='activated'>" + value + "</li>");
			$(".adding-list").append("<li id='input'><input type='text' id='input_text' /></li>");
			
			
			$('#input_text').focus();
			
			$lista++;
			
			return false;
		}
		// if backslash
		else if(event.which == 8) 
		{
			
			if($("#input_text").val() == "") {
				event.preventDefault();
			
				if($lista > 0)
				{
					$(".adding-list li:last-child").remove();	
					$(".adding-list li:last-child").remove();							
					
					$(".adding-list").append("<li id='input'><input type='text' id='input_text' /></li>");
					$('#input_text').focus();
					return false;
				}
			}
			
		}
		
		
	});
	
	$("#save_btn").click(function() {
	
		if($lista > 0)
		{
			var emails = new Array();
			$i = 0;
		
			$('#input_text').parent().remove();
	
			$(".adding-list li").each(function() {
				emails[$i] = $(this).text();
				$i++;
			});
			
			var myJsonString = JSON.stringify(emails);
			
			$("#result").html(myJsonString);
			
		}
		else {
			alert("You need to enter some data");
		}
	});
});
