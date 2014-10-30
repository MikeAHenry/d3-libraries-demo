document.addEventListener("DOMContentLoaded", function() {


var data = {
  "xScale": "ordinal",
  "yScale": "linear",
  "main": [
    {
      "className": ".pizza",
      "data": [
        {
          "x": "Pepperoni",
          "y": 4
        },
        {
          "x": "Cheese",
          "y": 8
        },
        {
          "x": "Sausage",
          "y": 5
        },
        {
          "x": "Veggie Supreme",
          "y": 3
        }
      ]
    },
    {
      "className": ".pizza2",
      "data": [
        {
          "x": "Pepperoni",
          "y": 6
        },
        {
          "x": "Cheese",
          "y": 5
        },
        {
          "x": "Sausage",
          "y": 8
        },
        {
          "x": "Veggie Supreme",
          "y": 2
        }
      ]
    }
  ]
};

  var myChart = new xChart('cumulative', data, '#bar-chart');

  
});