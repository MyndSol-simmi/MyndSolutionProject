function createRadioDiv() {
   
    var MainDiv = document.getElementById("wrapper2");

    var newdiv = document.createElement('div');

    var divclassName = 'radioField';

    newdiv.setAttribute('class', divclassName);

    MainDiv.appendChild(newdiv);
    createRadioLabel();
    createRadioButton();
    //var newdiv = document.createElement('div');

    //var divclassName = 'radioField';

    //newdiv.setAttribute('class', divclassName);

   /* MainDiv.appendChild(newdiv);*/
    //createInput("TextBox", true, "Alphabhet");
   

}
function createRadioLabel() {
    //create div class for Label

    var parentDiv = document.querySelector(".radioField");


    var newdiv = document.createElement('div');

    var divclassName = 'Label';

    newdiv.setAttribute('class', divclassName);

    parentDiv.appendChild(newdiv);

    //create label
    var parentDiv = document.querySelector(".Label");

    var newdiv = document.createElement('label');

    var divclassName = 'Gender';

    newdiv.setAttribute('class', divclassName);

    newdiv.innerHTML = "Gender";

    parentDiv.appendChild(newdiv);
}

function createRadioButton() {
    var parentDiv = document.querySelector(".radioField");
    var radiobox1 = document.createElement('input');
    radiobox1.type = 'radio';
    radiobox1.name = 'radioButton';
    radiobox1.id = 'Gender';
    radiobox1.value = 'Male';
    radiobox1.checked = 'checked';

    var label1 = document.createElement('label')
    label1.htmlFor = 'Gender';

    var description = document.createTextNode('Male');
    label1.appendChild(description);

    var newline = document.createElement('br');

    var container = document.querySelector(".radioField");
    container.appendChild(radiobox1);
    container.appendChild(label1);
    container.appendChild(newline);

    var radiobox2 = document.createElement('input');
    radiobox2.type = 'radio';
    radiobox2.name = 'radioButton';
    radiobox2.id = 'Gender';
    radiobox2.value = 'Female';

    var label2 = document.createElement('label')
    label2.htmlFor = 'Gender';

    var description2 = document.createTextNode('Female');
    label2.appendChild(description2);

    container.appendChild(radiobox2);
    container.appendChild(label2);
   

}

