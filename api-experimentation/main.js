var data = [
	{
		symbol: "KEY",
		name: "Keycorp",
		allocation: 2.0643,
		benchmarkAllocation: 1.1945,
		active: 0.8698,
		price: 90.7800,
		changeTodayDollar: 0.2200,
		changeTodayPercent: 0.2423,
		oneDayReturnPercent: -0.0033,
		twelveMonthReturnPercent: -0.2100,
		quantity: 302350,
		marketValueUSD: 27447333,
		sector: {
			name: "Information Technology",
			code: "IT"
		},
		region: "EU",
		country: {
			name: "Germany",
			code: "DE"
		}
	},
	//...
];

var chart = new vizkit.visuals.barChart({
	parent: '#selector',
	data: data,
	map: function(d) {
		return {
			// only the information you want displayed on the chart from each data object
			// in the order you want them to be displayed
			// use the property as the title and the value as the value

			symbol: d.symbol,

			q: d.quantity,
			price: d.price
		}
	},
	sortBy: ['q', 'price'],
	fill: ['#ff3399', '#aabbcc', '#ffcc99', '#c09efg'],
	width: '50%',
	height: '400px',
	on: {
		mouseover: function(elem, d) { },
		click: function(elem, d) { }
	}
});

var legend = new vizkit.visuals.legend(chart);


