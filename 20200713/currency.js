alert("Connected");
console.log("Connected");

// Load google charts
//google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
//function drawChart() {
  var EUR;
  var USD;
  var POUND;
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['EUR €', 8],
  ['USD $', 2],
  ['Pound £', 4],
 ]);

  // Optional; add a title and set the width and height of the chart
  //var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  //var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

var url='http://query.yahooapis.com/v1/public/yql?q=select * from html where url=\'http://stackoverflow.com/\' and xpath=\'//div[@id="question-mini-list"]//h3//a\'&format=json&callback=?';


$.getJSON( url, function(data){
    $.each(data.query.results.a, function(){       
        $('body').append('<div><a href="http://stackoverflow.com'+this.href +'">'+this.content+'</a></div>')          
     })
})

$(".banner").each(function(){
    var inc=$(this);
    $.get(inc.attr("title"), function(data){
        inc.replaceWith(data);
    });
});

//WEB SCRAPPING

async function scrapeProduct(url) {

}
