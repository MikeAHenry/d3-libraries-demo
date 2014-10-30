(function() {
    document.addEventListener("DOMContentLoaded", function() { 

        var hotData = [
            {date: 1},
            {date: 3},
            {date: 6},
            {date: 11},
            {date: 12},
            {date: 13},
            {date: 26},
            {date: 31}
        ];

        var chart1 = d3.select("#visHighs")
            .append("svg")
            .style("width", 500)
            .style("height", 50)
            .chart("CircleChart")
                .width(500)
                .height(50)
                .radius(5);

        chart1.draw(hotData);

        var rainData = [
            {date: 1},
            {date: 5},
            {date: 16},
            {date: 28},
            {date: 31}
        ];

        var chart2 = d3.select("#visRain")
            .append("svg")
            .style("width", 500)
            .style("height", 50)
            .chart("BlueCircleChart");

        chart2.draw(rainData);

        var rainData2 = [
            {date: 1, rainfall: 0.5},
            {date: 5, rainfall: 0.25},
            {date: 16, rainfall: 1.5},
            {date: 28, rainfall: 2.0},
            {date: 31, rainfall: 0.75}
        ];

        var chart3 = d3.select('#visRainAdv')
            .chart('BlueCircleBarChart');

        chart3.draw(rainData2);
    });
}());