//const { DateTime } = require("mssql");
function createDateDiv() {
	var MainDiv = document.getElementById('data');

	var newdiv = document.createElement('div');

	var divclassName = 'MainDiv';//+ data.FieldID;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);
	//createInput("TextBox", true, "Alphabhet");
	createDateLabel();
	createDateInput();

}
function createDateLabel() {
	//create div class for Label
	var sel1 = '.MainDiv';//+ data.FieldID;
	var parentDiv1 = document.querySelector(sel1);

	var newdiv1 = document.createElement('div');

	var divclassName1 = 'Label';// + data.FieldID;

	newdiv1.setAttribute('class', divclassName1);

	newdiv1.setAttribute("style", "display: inline");

	parentDiv1.appendChild(newdiv1);


	//create label
	var sel2 = '.Label';// + data.FieldID;
	var parentDiv2 = document.querySelector(sel2);

	var newdiv2 = document.createElement('label');

	var divclassName2 = 'lbl';//+ data.FieldID;

	newdiv2.setAttribute('class', divclassName2);

	newdiv2.innerHTML = "Date";//data.displayName;
	//if (data.IsRequired == 1) {
	//	newdiv2.innerHTML = data.displayName + '*';
	//}

	parentDiv2.appendChild(newdiv2);
}
function createDateInput() {
	//create div class for TextBox
	var sel = '.MainDiv';//+ data.FieldID;
	var parentDiv = document.querySelector(sel);
	var newdiv = document.createElement('div');
	var divclassName = 'InputDiv';// + data.FieldID;
	newdiv.setAttribute('class', divclassName);
	newdiv.setAttribute("style", "display:  inline-block;");
	parentDiv.appendChild(newdiv);

		//create input for TextBox
		var sel1 = '.InputDiv';//+ data.FieldID;
		var parentDiv1 = document.querySelector(sel1);
		var newdiv1 = document.createElement('input');
	    var divIdName1 = 'datePicker';//+ data.FieldID;
	    newdiv1.setAttribute('Id', divIdName1);
	    newdiv1.setAttribute('type', 'date');
		newdiv1.setAttribute("align", "right");
		parentDiv1.appendChild(newdiv1);

	
	//Datevalidation();
	//create div for Validation icon
	var parentDiv2 = document.querySelector(sel1);
	var newdiv2 = document.createElement('div');
	var divclassName2 = 'TextinputErroricon';
	newdiv2.setAttribute('class', divclassName2);
	parentDiv2.appendChild(newdiv2);

	//create div for Validation message
	var parentDiv3 = document.querySelector(sel1);
	var newdiv3 = document.createElement('div');
	var divclassName3 = 'TextinputError';
	newdiv3.setAttribute('class', divclassName3);
	parentDiv3.appendChild(newdiv3);

}

//start--Create Formula Div
//const { DateTime } = require("mssql");
function createFormulaDiv() {
	var MainDiv = document.getElementById('data1');

	var newdiv = document.createElement('div');

	var divclassName = 'MainDiv1';//+ data.FieldID;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);
	//createInput("TextBox", true, "Alphabhet");
	createFormulaLabel();
	createFormulaOutput();

}
function createFormulaLabel() {
	//create div class for Label
	var sel1 = '.MainDiv1';//+ data.FieldID;
	var parentDiv1 = document.querySelector(sel1);

	var newdiv1 = document.createElement('div');

	var divclassName1 = 'Label1';// + data.FieldID;

	newdiv1.setAttribute('class', divclassName1);

	newdiv1.setAttribute("style", "display: inline");

	parentDiv1.appendChild(newdiv1);


	//create label
	var sel2 = '.Label1';// + data.FieldID;
	var parentDiv2 = document.querySelector(sel2);

	var newdiv2 = document.createElement('label');

	var divclassName2 = 'lbl1';//+ data.FieldID;

	newdiv2.setAttribute('class', divclassName2);

	newdiv2.innerHTML = "Age";//data.displayName;
	//if (data.IsRequired == 1) {
	//	newdiv2.innerHTML = data.displayName + '*';
	//}

	parentDiv2.appendChild(newdiv2);
}
function createFormulaOutput() {
	//create div class for TextBox
	var sel = '.MainDiv1';//+ data.FieldID;
	var parentDiv = document.querySelector(sel);
	var newdiv = document.createElement('div');
	var divclassName = 'InputDiv1';// + data.FieldID;
	newdiv.setAttribute('class', divclassName);
	newdiv.setAttribute("style", "display:  inline-block;");
	parentDiv.appendChild(newdiv);

	//create input for TextBox
	var sel1 = '.InputDiv1';//+ data.FieldID;
	var parentDiv1 = document.querySelector(sel1);
	var newdiv1 = document.createElement('label');
	var divIdName1 = 'age';//+ data.FieldID;
	newdiv1.setAttribute('Id', divIdName1);
	newdiv1.innerHTML = calculateAge();
	parentDiv1.appendChild(newdiv1);


	//Datevalidation();
	//create div for Validation icon
	var parentDiv2 = document.querySelector(sel1);
	var newdiv2 = document.createElement('div');
	var divclassName2 = 'TextinputErroricon1';
	newdiv2.setAttribute('class', divclassName2);
	parentDiv2.appendChild(newdiv2);

	//create div for Validation message
	var parentDiv3 = document.querySelector(sel1);
	var newdiv3 = document.createElement('div');
	var divclassName3 = 'TextinputError1';
	newdiv3.setAttribute('class', divclassName3);
	parentDiv3.appendChild(newdiv3);

}

//end--Create Formula Div

function calculateAge() {
    var date = new Date($('#datePicker').val());
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getYear();
    var Today = new Date();
    const diff = Math.abs(date - Today)
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
   // var day = $('#datePicker').getDate();
	console.log(age);
	return age;
}