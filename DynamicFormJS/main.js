
var mainControl = {
    load: function () {
        alert('found');
        console.log('System initalized. Proceed ahead');
        // A $( document ).ready() block.
        $(document).ready(function () {
            console.log("ready!");
            createTextDiv();
            createRadioDiv()
        });
       
    }
}

////function createId() {
////	var MainDiv = document.getElementById("wrapper");

////	var newdiv = document.createElement('label');

////	var divclassName = 'loginName';

////	newdiv.setAttribute('class', divclassName);

////	newdiv.innerHTML = "Login Name" ;

////	document.getElementsByTagName("body")[0]
////		.appendChild(newdiv);
////	createInput("TextBox" ,true,"Alphabhet");
////}

////function createInputValidation(controlType ,isRequired ,ValidationType,DataSource) {
////	var controlType = controlType;
////	var isRequired = isRequired;
////	switch (controlType) {
////		case "TextBox":
////			var newdiv = document.createElement('input');
////			var divIdName = 'loginName';
////			newdiv.setAttribute('Id', divIdName);
////			document.getElementsByTagName("body")[0]
////				.appendChild(newdiv);
////			if (isRequired) { //onblur --focusout or submit
////				newdiv.setAttribute('required','required');
////				document.getElementsByTagName("body")[0]
////					.appendChild(newdiv);
////				//var Id = document.getElementById("loginName");

////			}
////			break;
////		case "Label":
////			var newdiv = document.createElement('label');
////			var divclassName = 'loginInput';
////			newdiv.setAttribute('class', divclassName);
////			newdiv.innerHTML = "   readOnlyField";
////			document.getElementsByTagName("body")[0]
////				.appendChild(newdiv);
////			break;
////		//case Radio:

////		//case checkbox:

////		//case Dropdown:

////	}
//////	//validation
//////	function fieldValidation(Id) {
//////		//Alphabhet
//////		var reg = 

//////    }



////}