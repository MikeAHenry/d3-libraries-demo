(function() {
    // compose both a BlueCircleChart and a BarChart
    d3.chart("BlueCircleBarChart", {
        initialize: function() {

            var chart = this;

            // create new containers for each of the charts
            var bases = {
                bar:  chart.base.append("svg")
                    .style("width", 500)
                    .style("height", 200)
                    .append("g").classed("bar", true),
                blueCircle:  chart.base.append("svg")
                    .style("width", 500)
                    .style("height", 100)
                    .append("g").classed("blueCircle", true)
            };


            // initialize the charts with their required setters/getters.
            chart.charts = {
            bar : bases.bar
                .chart('BarChart')
                .width(500)
                .height(200),

            blueCircle : bases.blueCircle
                .chart('BlueCircleChart')
            };

            // attach the charts under a specific name to the parent chart
            chart.attach("bar", chart.charts.bar);
            chart.attach("blueCircle", chart.charts.blueCircle);
        },
        demux: function(name, data) {
                // for a circle chart, we can just return the data as is since it has the
                // "date" property we need.
                if (name === "blueCircle") {
                    return data;
                } else {
                // for the bar chart, we need to remap the data so that our "rainfall" attribute
                // is actually mapped to a "value" property. 
                return data.map(function(d) {
                    return { name : 'July ' + d.date, value: d.rainfall };
                });
              }
        }
    });
}());