var container = d3.select('body').append('svg')
  .attr('width', 600)
  .attr('height', 400)
  .style("border", "1px solid");

var circleData = [0];

var circle = container.selectAll('.circle', function(d){return d;})
              .data(circleData);

circle.enter().append('circle')
  .style("stroke", "gray")
          .style("fill", "red")
          .attr("r", 20)
          .attr("cx", 300)
          .attr("cy", 200);

d3.select('.position-track').text("X: 300, Y: 200");

//d3.select('.position-track').;

var run = function(){
  circle
  .transition().duration(10000)
  .tween('track-position', tracker)
  .attr("cx", 100)
  .attr("cy", 100);
}

var reset = function(){
  circle
  .transition().duration(2000)
  .tween('track-position', tracker)
  .attr("cx", 300)
  .attr("cy", 200);
}

var tracker = function(){
  var lastX = 0;
  var lastY = 0;
  return function(){
    var curX = Math.floor(circle.attr('cx'));
    var curY = Math.floor(circle.attr('cy'));
    // only update if circle has moved at least a pixel in x and y
    // directions
    if(curX !== lastX && curY !== lastY){
      d3.select('.position-track').text("X: " + curX + ", Y: " + curY);
    }
  }
}