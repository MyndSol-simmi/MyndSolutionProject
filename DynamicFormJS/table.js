
function GenerateTable(row,col,mydata) {
        //Build an array containing Customer records.
    //    var customers = new Array();
    //customers.push(["Customer Id", "Name", "Country"]);
    //customers.push([1, "John Hammond", "United States"]);
    //customers.push([2, "Mudassar Khan", "India"]);
    //customers.push([3, "Suzanne Mathews", "France"]);
    //customers.push([4, "Robert Schidner", "Russia"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";

    //Get the count of columns.
    var columnCount = col;
    var rowCount= row;
    var cellCount = 1;
    console.log(rowCount);
    console.log(columnCount);
  

    //Add the data rows.
    for (var i = 0; i < rowCount; i++) {
        row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
          //Create a div
       var newdiv = document.createElement('div');
        var dividName = 'wrapper' + cellCount;
        newdiv.setAttribute('id', dividName);
        //append a div
        cell.appendChild(newdiv);
    //cell.innerHTML = customers[i][j];
        cellCount++;
            }
    }

    
     
    table.style.width = "100%";
    table.style.height = "100vh";
    var dvTable = document.getElementById("dvTable");
    //create div class for Head
    var newdiv = document.createElement('div');
    var divclassName = 'Head';
    newdiv.innerHTML = "Purchase Requisition";
    newdiv.setAttribute('class', divclassName);
    newdiv.setAttribute("style", "display:  inline-block;");
    dvTable.appendChild(newdiv);
   // dvTable.innerHTML = "ab";

    dvTable.appendChild(table);  
    cellhtml(mydata);
}

function cellhtml(mydata)
{
    const cells = document.querySelectorAll('td');
    for (var i = 1; i <=cells.length; i++) {
        var sel = 'wrapper' + i;
        var Id = document.getElementById(sel);

        var controlType = mydata[i - 1].FieldType;
	    var isRequired = isRequired;
        switch (controlType) {
            case "Text Box":
            case "Text Field":
            case "Child Item":
                createTextDiv(Id, mydata[i - 1]);
                break;
            case "Check Box":
                createcheckDiv(Id, mydata[i - 1]);
                break;
            case "Drop Down":
            case  "Lookup":
                createDropDiv(Id, mydata[i - 1]);
                break;
            case "Radio Button":
                createRadioDiv();
                break;
            case "File Uploader":
                createfileDiv(Id, mydata[i - 1]);
                break;
        }
        //if (mydata[i].FieldType == 'Text Box') {
        //    createTextDiv(Id,mydata[i-1]);
        //}
    }
   

}