function createLabelDiv() {
	//create div class for TextBox
	var parentDiv = document.querySelector(".Field1");
	var newdiv = document.createElement('div');
	var divclassName = 'Label';
	newdiv.setAttribute('label', divclassName);
	parentDiv.appendChild(newdiv);


	//create input for TextBox
	var parentDiv1 = document.querySelector(".Textbox");
	var newdiv1 = document.createElement('input');
	var divIdName1 = 'loginNameInput';
	newdiv1.setAttribute('Id', divIdName1);
	parentDiv1.appendChild(newdiv1);

	//create div for Validation icon
	var parentDiv2 = document.querySelector(".Field1");
	var newdiv2 = document.createElement('div');
	var divclassName2 = 'TextinputErroricon';
	newdiv2.setAttribute('class', divclassName2);
	parentDiv2.appendChild(newdiv2);

	////create div for Validation message
	//var parentDiv3 = document.querySelector(".Field1");
	//var newdiv3 = document.createElement('div');
	//var divclassName3 = 'TextinputError';
	//newdiv3.setAttribute('class', divclassName3);
	//parentDiv3.appendChild(newdiv3);
}