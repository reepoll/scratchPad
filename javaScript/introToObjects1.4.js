var getReview = function(movie){
	switch(movie){
		case "Toy Story 2":
			return "Great story. Mean prospector.";
		case "Finding Nemo":
			return "Cool animation, and funny turtles.";
		case "The Lion King":
			return "Great songs.";
	}
}

console.log(getReview("Toy Story 2"));
