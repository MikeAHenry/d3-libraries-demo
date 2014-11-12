function getDataSeries(data) {
    var result = [{"key": "Allocation", "values": []}, 
        {"key": "1-Day Returns", "values": []}, 
        {"key": "1-Year Returns", "values": []}];
    for(var i = 0; i < data.length -1; i++) {
        result[0].values.push({x: data[i].sectorCode, y: data[i].allocation});
        result[1].values.push({x: data[i].sectorCode, y: data[i].return1d});
        result[2].values.push({x: data[i].sectorCode, y: data[i].return1yr});
    }
    console.log(result);
    return result;
}

d3.json("data.json",function(datafile){
    var data = datafile[0].analysis;

    nv.addGraph(function() {
        var chart = nv.models.multiBarHorizontalChart()
            //.width(600)
            .height(400)
            //.tooltips(false)
            .stacked(true)
            .showControls(false);
        d3.select("#chart").append("svg")
            .datum(getDataSeries(data))
            .transition().duration(500)
            .call(chart).style({'height': '400' });

        nv.utils.windowResize(
            function() {
                chart.update();
            }
        );


        return chart;
    });
});