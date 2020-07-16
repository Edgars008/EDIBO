alert("Connected");

var excelIO = new GC.Spread.Excel.IO(); 

var excelUrl = $("#importUrl").val();  

function ImportFile() {  
    var excelUrl = "./test.xlsx";  

    var oReq = new XMLHttpRequest();  
    oReq.open('get', excelUrl, true);  
    oReq.responseType = 'blob';  
    oReq.onload = function () {  
        var blob = oReq.response;  
        excelIO.open(blob, LoadSpread, function (message) {  
            console.log(message);  
        });  
    };  
    oReq.send(null);  
}  
function LoadSpread(json) {  
    jsonData = json;  
    workbook.fromJSON(json);  

    workbook.setActiveSheet("Revenues (Sales)");  
} 

$(document).ready(function () {  
    $.support.cors = true;  
    workbook = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));  
    //...  
}); 

document.getElementById("addRevenue").onclick = function () {  
    var sheet = workbook.getActiveSheet();  
    sheet.addRows(newRowIndex, 1);  
    sheet.copyTo(10, 1, newRowIndex, 1, 1, 29, GC.Spread.Sheets.CopyToOptions.style);  
}  

sheet.setValue(newRowIndex, 1, "Revenue 8");  

for (var c = 3; c < 15; c++) {  
    sheet.setValue(newRowIndex, c, Math.floor(Math.random() * 200) + 10);  
}  

sheet.setFormula(newRowIndex, 15, "=SUM([@[Jan]:[Dec]])")  
sheet.setValue(newRowIndex, 16, 0.15);  

sheet.copyTo(10, 17, newRowIndex, 17, 1, 13, GC.Spread.Sheets.CopyToOptions.formula);  

var data = new GC.Spread.Sheets.Range(11, 3, 1, 12);  
var setting = new GC.Spread.Sheets.Sparklines.SparklineSetting();  
setting.options.seriesColor = "Text 2";  
setting.options.lineWeight = 1;  
setting.options.showLow = true;  
setting.options.showHigh = true;  
setting.options.lowMarkerColor = "Text 2";  
setting.options.highMarkerColor = "Text 1"; 

sheet.setSparkline(11, 2, data, GC.Spread.Sheets.Sparklines.DataOrientation.horizontal, GC.Spread.Sheets.Sparklines.SparklineType.line, setting); 

workbook.suspendPaint();  
workbook.suspendCalcService();  
//...  
workbook.resumeCalcService();  
workbook.resumePaint(); 


function ExportFile() {  
    var fileName = $("#exportFileName").val();  
    if (fileName.substr(-5, 5) !== '.xlsx') {  
        fileName += '.xlsx';  
    }  
    var json = JSON.stringify(workbook.toJSON());  

    excelIO.save(json, function (blob) {  
        saveAs(blob, fileName);  
    }, function (e) {  
        if (e.errorCode === 1) {  
            alert(e.errorMessage);  
        }  
    });  
}  

document.getElementById("export").onclick = function () {  
    ExportFile();  
}  