
function onFrame(event) {
	d3.select("#container").selectAll("p")
	.data([Math.random(), Math.random()])
	.enter().append("p")
	.text(function(d){ return d; });
}