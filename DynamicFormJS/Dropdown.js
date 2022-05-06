function createDropDiv(el, data) {
	var MainDiv = document.getElementById(el.id);

	var newdiv = document.createElement('div');

	var divclassName = 'MainDiv' + data.FieldID;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);
	//createInput("TextBox", true, "Alphabhet");
	createdropLabel(data);
	createDropInput(data);

}
function createdropLabel(data) {
	//create div class for Label
	var sel1 = '.MainDiv' + data.FieldID;
	var parentDiv1 = document.querySelector(sel1);

	var newdiv1 = document.createElement('div');

	var divclassName1 = 'Label' + data.FieldID;

	newdiv1.setAttribute('class', divclassName1);

	parentDiv1.appendChild(newdiv1);

	//create label
	var sel2 = '.Label' + data.FieldID;
	var parentDiv2 = document.querySelector(sel2);

	var newdiv2 = document.createElement('label');

	var divclassName2 = 'lbl' + data.FieldID;

	newdiv2.setAttribute('class', divclassName2);

	newdiv2.innerHTML = data.displayName;

	parentDiv2.appendChild(newdiv2);
}
function createDropInput(data) {
	//create div class for Label
	var sel = '.MainDiv' + data.FieldID;
	var parentDiv = document.querySelector(sel);
	var newdiv = document.createElement('div');
	var divclassName = 'InputDiv' + data.FieldID;
	newdiv.setAttribute('class', divclassName);
	parentDiv.appendChild(newdiv);


	//create input for TextBox
	var sel1 = '.InputDiv' + data.FieldID;
	var parentDiv1 = document.querySelector(sel1);

	
	createDropInputoption(parentDiv1, data);


	////create div for Validation icon
	//var parentDiv2 = document.querySelector(sel1);
	//var newdiv2 = document.createElement('div');
	//var divclassName2 = 'TextinputErroricon';
	//newdiv2.setAttribute('class', divclassName2);
	//parentDiv2.appendChild(newdiv2);

	////create div for Validation message
	//var parentDiv3 = document.querySelector(sel1);
	//var newdiv3 = document.createElement('div');
	//var divclassName3 = 'TextinputError';
	//newdiv3.setAttribute('class', divclassName3);
	//parentDiv3.appendChild(newdiv3);

}




function createDropInputoption(el, data)
{
	//create Id for checkBox
	var sel1 = '.InputDiv' + data.FieldID;
	var parentDiv1 = document.querySelector(sel1);
	var newdiv1 = document.createElement('div');
	var divIdName1 = 'Dropcontainer' + data.FieldID;
	newdiv1.setAttribute('Id', divIdName1);
	parentDiv1.appendChild(newdiv1);

var values = ["Option a", "Option b", "Option c", "Option d"];

var select = document.createElement("select");
    select.name = "options";
	select.id = "option"+data.FieldID;
	var option = document.createElement("option");
	option.value = "Select";
	option.text = "Select";
	option.setAttribute('disabled', true);
	option.setAttribute('selected', true);
	option.setAttribute('hidden', true);
	select.appendChild(option);

for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
}

//var label = document.createElement("label");
//	label.innerHTML = data.displayName;
//label.htmlFor = "option";
	document.getElementById("Dropcontainer" + data.FieldID).appendChild(select);
}
