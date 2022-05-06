function createTextDiv(el,data) {
	var MainDiv = document.getElementById(el.id);

	var newdiv = document.createElement('div');

	var divclassName = 'MainDiv' + data.FieldID;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);
	//createInput("TextBox", true, "Alphabhet");
	createtextLabel(data);
	createTextBox(data);

}
function createtextLabel(data) {
	//create div class for Label
	var sel1 = '.MainDiv' + data.FieldID;
	var parentDiv1 = document.querySelector(sel1);

	var newdiv1 = document.createElement('div');

	var divclassName1 = 'Label' + data.FieldID;

	newdiv1.setAttribute('class', divclassName1);

	newdiv1.setAttribute("style", "display: inline");

	parentDiv1.appendChild(newdiv1);


	//create label
	var sel2 = '.Label' + data.FieldID;
	var parentDiv2 = document.querySelector(sel2);

	var newdiv2 = document.createElement('label');

	var divclassName2 = 'lbl' + data.FieldID ;

	newdiv2.setAttribute('class', divclassName2);

	newdiv2.innerHTML = data.displayName;
	if (data.IsRequired == 1) {
		newdiv2.innerHTML = data.displayName+'*'  ;
	}
	
	parentDiv2.appendChild(newdiv2);
}
function createTextBox(data) {
	//create div class for TextBox
	var sel = '.MainDiv' + data.FieldID;
	var parentDiv = document.querySelector(sel);
	var newdiv = document.createElement('div');
	var divclassName = 'InputDiv' + data.FieldID;
	newdiv.setAttribute('class', divclassName);
	newdiv.setAttribute("style", "display:  inline-block;");
	parentDiv.appendChild(newdiv);

	if (data.FieldType == 'Text Box') {
		//create input for TextBox
		var sel1 = '.InputDiv' + data.FieldID;
		var parentDiv1 = document.querySelector(sel1);
		var newdiv1 = document.createElement('input');
		var divIdName1 = 'TextInput' + data.FieldID;
		newdiv1.setAttribute('Id', divIdName1);
		newdiv1.setAttribute("align" , "right");
		parentDiv1.appendChild(newdiv1);

	}
	else if (data.FieldType == 'Text Area') {
		//create input for TextBox
		var sel1 = '.InputDiv' + data.FieldID;
		var parentDiv1 = document.querySelector(sel1);
		var newdiv1 = document.createElement('textarea');
		var divIdName1 = 'TextInput' + data.FieldID;
		newdiv1.setAttribute('Id', divIdName1);
		newdiv1.setAttribute('rows', 2);
		newdiv1.setAttribute('cols', 25);
		parentDiv1.appendChild(newdiv1);
    }
	//validation
	var dis = '#' + divIdName1;
	$(dis).bind('copy paste cut drag', function (e) {
		e.preventDefault(); //disable cut,copy,paste
		alert('drag,cut,copy & paste options are disabled !!');
	});
   validation(divIdName1, data);
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

