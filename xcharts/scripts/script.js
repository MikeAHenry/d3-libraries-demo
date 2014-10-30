document.addEventListener("DOMContentLoaded", function() {

	function generateRandomScatter(min, max, n) {
		var data = [];
		for (var i = 0; i < n; i++) {
			data.push({
				"x":getRandom(min,max),
				"y":getRandom(min,max)
			});
		}
		return data;
	}

	function getRandom (min, max) {
        return Math.random() * (max - min + 1) + min;

    }

	var data = {
		"xScale": "linear",
		"yScale": "linear",
		"main": [
			{
				"className": ".freshmen",
				"data": generateRandomScatter(20,100,200)
			},
			{
				"className": ".sophomore",
				"data": generateRandomScatter(20,100,200)
			},
			{
				"className": ".junior",
				"data": generateRandomScatter(20,100,200)
			},
			{
				"className": ".senior",
				"data": generateRandomScatter(20,100,200)
			}
		]
	};


	var scatter = {
		enter: function(self, storage, className, data) {

			var container = self._g.selectAll('g' + className)
			.data(data, function (d) {
				return d.className;
			});

			container
			.enter()
			.append('g')
			.attr('class', function (d, i) {
				return 'circle' + className.replace(/\./g, ' ') +
					' color' + i;
			});

			var circles = container.selectAll('circle')
				.data(function (d) {
					return d.data;
				});

			circles.enter()
				.insert('circle')
				.attr('style',"stroke-width: 0")
				.attr('r',5)
				.attr('cx',function(d) { return self.xScale(d.x)})
				.attr('cy',function(d) { return self.yScale(d.y)});

			storage.containers = container;
			storage.circles = circles;

		},
		update: function(self, storage, timing) {
			storage.circles.transition().duration(timing)
				.style('opacity', 1)
				.attr('cx',function(d) { return self.xScale(d.x + getRandom(-10,10))})
				.attr('cy',function(d) { return self.yScale(d.y + getRandom(-10,10))});
		},
		exit: function(self, storage, timing) {
			storage.circles.exit()
				.transition().duration(timing)
				.style('opacity', 0);
		},
		destroy: function(self, storage, timing) {

			storage.circles
				.transition().duration(timing)
				.style('opacity', 0)
				.remove();
		}
	};

	xChart.setVis('scatter', scatter);

	var myChart = new xChart('scatter', data, '#bar-chart');
});