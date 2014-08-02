$(document).ready(function(){
	
	//Excercise 1
	$("#ex1").click(function(){
		$("#ex1").text("clicked");
	});

	//Excercise 2
	$(".bg-primary").hover(
		function() {
			$("#itemToMod").removeClass("hidden");
		},
		function() {
			$("#itemToMod").addClass("hidden");
		}
	);

	//Excercise 3
	$(".submit-hash").click(function(){
		var value = encodeURIComponent($("#ex3-text-to-hash").val());
		$.ajax("http://md5.jsontest.com/?text=" + value, {
		  
		  	// work with the response
		    success: function( response ) {
		        $("#ex3-hash-result").val(response.md5);
		    }
		});

	});

	//Excercise 4
	$(".ex4-count-characters").keyup(function() {
		$(".ex4-character-count").text($(".ex4-count-characters").val().length);
	});

});




