//Tutorial from http://bost.ocks.org/mike/bar/2/

//declare variables and set chart size so it does not rescale after download

var width = 420;
var	barHeight = 21;

var x = d3.scale.linear()
	.range([0, width]);

var chart = d3.select(".chart")
	.attr("width", width);

//begin download
d3.csv("data.csv", type, function(error, data){
	x.domain([0, d3.max(data, function(d) {return d.value; })]);

	chart.attr("height", barHeight * data.length);

	var bar = chart.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform", function(d, i) {return "translate(0," + i  * barHeight + ")";});

	bar.append("rect")
		.attr("width", function(d) {return x(d.value); })
		.attr('height', barHeight - 1);

	bar.append("text")
		.attr('x', function(d) {return x(d.value) - 3; })
		.attr('y', barHeight / 2)
		.attr('dy', ".35em")
		.text(function(d) {return d.name + " - " + d.value;});
});

function type(d) {
	d.value = +d.value; // coerce to number
	return d;
}