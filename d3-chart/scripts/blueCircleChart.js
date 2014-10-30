(function() {
    // define an extended chart from the CircleChart:
    d3.chart("CircleChart").extend("BlueCircleChart", {

        initialize: function() {

            // set default height, width, and radius
            this.h = this.h || 50;
            this.w = this.w || 500;
            this.r = this.r || 5;

            // on the circles layer, hook into the enter lifecycle event
            this.layer("circles").on("enter", function() {

                // alter the style of the selection (in this case the circles)
                // and set their fill to be blue instead.
                return this.style("fill", "blue");
            });
        }
    });
}());