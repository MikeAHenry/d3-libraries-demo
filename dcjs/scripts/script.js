d3.json('data.json', function (datafile) {
    var data = datafile[0].analysis;

    var ndx = crossfilter(data);

    var sectorDim = ndx.dimension(function(d) { return d.sector; });
    var allocations = sectorDim.group().reduce(
        function (p, v) {
            p.allocation += v.allocation;
            p.return1d += v.return1d;
            p.return1yr += v.return1yr;
            return p;
        },
        function (p, v) {
            p.allocation -= v.allocation;
            p.return1d -= v.return1d;
            p.return1yr -= v.return1yr;
            return p;
        },
        function () {
            return {
                allocation: 0,
                return1d: 0,
                return1yr: 0
            };
        }
    );

    var sectors = [];
    sectorDim.group().reduceSum(function(d) { return d.sector; }).top(Infinity).forEach(function (d) { sectors.push(d.key)});

    var chart = dc.barChart("#chart-line-allocations"); 

    
    chart
        .width(975).height(325)
        .dimension(sectorDim)
        .group(allocations, "Allocation")
        .valueAccessor(function (d) {
            return d.value.allocation;
        })
        .stack(allocations, "1-Day Return", function (d) {
            return d.value.return1d;
        })
        .stack(allocations, "1-Year Return", function (d) {
            return d.value.return1yr;
        })
        .xUnits(dc.units.ordinal)
        .x(d3.scale.ordinal().domain(sectors))
        .elasticY(true)
        .brushOn(false);

    dc.renderAll(); 
});