(function() {

	if (!window.d3) {
		return;
	}

	var vizKit = {
		version: '0.1.1'
	};


	var utils = {};

	utils.dimensions = {};
	utils.dimensions.minMaxByProperty 		= function(data) { };
	utils.dimensions.scaleByProperty 		= function(data) { };

	utils.dataCruncher = {};
	utils.dataCruncher.getData				= function(options) { };
	utils.dataCruncher.preprocess			= function(options) { };
	utils.dataCruncher.sort					= function(options) { };

	utils.resizer = {};
	utils.resizer.resizeChart				= function(options) { };

	utils.colors = {};
	utils.colors.mapColorsFromClasses		= function(map) { };






	var visuals = {};

	visuals.barChart 						= function(options) { };
	visuals.pieChart 						= function(options) { };
	visuals.histogram 						= function(options) { };
	visuals.lineGraph						= function(options) { };






	vizKit.utils 	= utils;
	vizKit.visuals 	= visuals;

	window.vizKit = vizKit;
	return v;

})();