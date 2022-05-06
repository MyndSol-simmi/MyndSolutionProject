function lookup() {
	var MainDiv = document.getElementById('Dropcontainer');

	var newdiv = document.createElement('div');

	var divclassName = 'lookup' + data.displayOrder;

	newdiv.setAttribute('class', divclassName);

	MainDiv.appendChild(newdiv);

}