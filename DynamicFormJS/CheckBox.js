function createcheckDiv(el, data) {
	var MainDiv = document.getElementById(el.id);

	var newdiv = document.createElement('div');

	var divclassName = 'MainDiv' + data.FieldID;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);
	//createInput("TextBox", true, "Alphabhet");
	createcheckLabel(data);
	createcheckBox(data);

}
function createcheckLabel(data) {
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
function createcheckBox(data) {
	//create div class for checkBox
	var sel = '.MainDiv' + data.FieldID;
	var parentDiv = document.querySelector(sel);
	var newdiv = document.createElement('div');
	var divclassName = 'InputDiv' + data.FieldID;
	newdiv.setAttribute('class', divclassName);
	parentDiv.appendChild(newdiv);


	//create Id for checkBox
	var sel1 = '.InputDiv' + data.FieldID;
	var parentDiv1 = document.querySelector(sel1);
	var newdiv1 = document.createElement('div');
	var divIdName1 = 'container';
	newdiv1.setAttribute('Id', divIdName1);
	parentDiv1.appendChild(newdiv1);
	createcheckBoxOption();

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





function createcheckBoxOption() {
    var checkbox1 = document.createElement('input');
    checkbox1.type = 'checkbox';
    checkbox1.id = 'mobileNo';
    checkbox1.name = 'mobileNo';
    checkbox1.value = false;

    var label1 = document.createElement('label')
    label1.htmlFor = 'mobileNo';
    label1.appendChild(document.createTextNode('mobileNo'));

    var checkbox2 = document.createElement('input');
    checkbox2.type = 'checkbox';
    checkbox2.id = 'Email';
    checkbox2.name = 'Email';
    checkbox2.value = false;

    var label2 = document.createElement('label')
    label2.htmlFor = 'Email';
    label2.appendChild(document.createTextNode('Email'));

    var br = document.createElement('br');

    var container = document.getElementById('container');
    container.appendChild(checkbox1);
    container.appendChild(label1);
    container.appendChild(checkbox2);
    container.appendChild(label2);
   // container.appendChild(br);
}