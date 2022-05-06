function load() {
    var mydata = JSON.parse(data);
    var len = mydata.length;
    var row = 1;
    var col = 1;
    if (len >= 10) {
        col = 3;
        row = Math.floor(len / col);
    }
    GenerateTable(row, col,mydata);
    //var div = document.getElementById('data');

    //for (var i = 0; i < mydata.length; i++) {
    //    div.innerHTML = div.innerHTML + "<p class='inner' id=" + i + ">" + mydata[i].FieldID + "</p>" + "<br>";
    //}
}