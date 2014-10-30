document.addEventListener("DOMContentLoaded", function() {
    d3.chart("CircleChart", {
        initialize: function() {
            // create a base scale we will use later.
            this.xScale = d3.scale.linear();

            var circlesBase = this.base.append("g")
                .classed("circles", true)
                .attr("height", this.h)
                .attr("width", this.w)

            this.layer("circles", circlesBase, {
                dataBind: function(data) {
                    var chart = this.chart();

                    // update the domain of the xScale since it depends on the data
                    chart.xScale.domain(d3.extent(data));

                    // return a data bound selection for the passed in data.
                    return this.selectAll("circle")
                        .data(data);

                },
                insert: function() {
                    var chart = this.chart();

                    // update the range of the xScale (account for radius width)
                    // on either side
                    chart.xScale.range([chart.r, chart.w - chart.r]);

                    // setup the elements that were just created
                    return this.append("circle")
                        .classed("circle", true)
                        .style("fill", "red")
                        .attr("cy", chart.h/2)
                        .attr("r", chart.r);
                },

                // setup an enter event for the data as it comes in:
                events: {
                    "enter" : function() {
                        var chart = this.chart();

                        // position newly entering elements
                        return this.attr("cx", function(d) {
                            return chart.xScale(d);
                        });
                    }
                }
            });

            circlesBase.labels = this.base.append("g").classed("labels", true);

            this.layer("labels", circlesBase.labels, {
                dataBind: function(data) {
                    return this.selectAll("text")
                        .data(data);
                },
                insert: function() {
                    return this.append("text")
                        .attr("text-anchor", "middle")
                        .classed("label", true);
                },
                events: {
                    enter: function() {
                        var chart = this.chart();

                        // position newly entering elements
                        return this.attr("x", function(d) {
                                return chart.xScale(d);
                            })
                            .attr("y", (chart.height() / 2) - (chart.radius()*2))
                            .text(function(d) {
                                return d;
                            })
                            .style("font-size", "8pt");
                    }
                }
            });
        },
        // configures the width of the chart.
        // when called without arguments, returns the
        // current width.
        width: function(newWidth) {
            if (arguments.length === 0) {
                return this.w;
            }
            this.w = newWidth;
            return this;
        },

        // configures the height of the chart.
        // when called without arguments, returns the
        // current height.
        height: function(newHeight) {
            if (arguments.length === 0) {
                return this.h;
            }
            this.h = newHeight;
            return this;
        },

        // configures the radius of the circles in the chart.
        // when called without arguments, returns the
        // current radius.
        radius: function(newRadius) {
            if (arguments.length === 0) {
                return this.r;
            }
            this.r = newRadius;
            return this;
        }
    });

    var hotData = [1,3,5,10,11,12,28,31];

    var chart1 = d3.select("#visHighs")
        .append("svg")
        .style("width", 500)
        .style("height", 100)
        .chart("CircleChart")
            .width(500)
            .height(50)
            .radius(5);

    chart1.draw(hotData);

    // define an extended chart from the CircleChart:
    d3.chart("CircleChart").extend("BlueCircleChart", {
        initialize: function() {

            // on the circles layer, hook into the enter lifecycle event
            this.layer("circles").on("enter", function() {

                // alter the style of the selection (in this case the circles)
                // and set their fill to be blue instead.
                return this.style("fill", "blue");
            });
        }
    });

    var rainData = [1,5,18,26,27,31];

    var chart2 = d3.select("#visRain")
        .append("svg")
        .style("width", 500)
        .style("height", 100)
        .chart("BlueCircleChart")
            .width(500)
            .height(50)
            .radius(5);

    chart2.draw(rainData);
});