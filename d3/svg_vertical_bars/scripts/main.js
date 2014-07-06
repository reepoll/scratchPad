//Tutorial from http://bost.ocks.org/mike/bar/2]3/

//declare variables and set chart size so it does not rescale after download

var width = 960;
var	height = 500;

var y = d3.scale.linear()
	.range([height, 0]);

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", height);

//begin download
d3.csv("data.csv", type, function(error, data){
	y.domain([0, d3.max(data, function(d) {return d.value;})]);

	var barWidth = width / data.length;

	var bar = chart.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform", function(d, i) {return "translate(" + i * barWidth + ", 0)";});

	bar.append("rect")
		.attr('y', function(d) { return y(d.value); })
		.attr('height', function(d) { return height - y(d.value);})
		.attr('width', barWidth - 1);

	bar.append("text")
		.attr('x', barWidth/2)
		.attr('y', function(d) { return y(d.value) + 3;})
		.attr('dy', ".75em")
		.attr('dx', 5)
		.text(function(d) {return d.name + "-" + d.value; });

});

function type(d) {
	d.value = +d.value; // coerce to number
	return d;
}