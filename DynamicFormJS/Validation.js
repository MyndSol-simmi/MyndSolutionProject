function validation(el, data) {
    var parentDiv1 = document.getElementById(el);
    //Required
    if (data.IsRequired == 1) {
        parentDiv1.setAttribute("required", "true");
    }
    
    //Input Validation
    var pattern1 = "return /[a-z]/i.test(event.key)"; //only character
    var pattern2 = "return /[0-9\-]/g.test(event.key)"; //only number
    var pattern3 = "return /[^0-9]/g.test(event.key)"; //non numeric
    var pattern4 = "return /[0-9a-z]/gi.test(event.key)";//alphanumeric
   
    ////DataType Numeric only
    parentDiv1.setAttribute("onkeypress", pattern4);

   

    //Autocomplete
    parentDiv1.setAttribute("autocomplete", "on");
}
function rangeValidate() {
    ////Range
    parentDiv1.setAttribute("minlength", "3");
    parentDiv1.setAttribute("maxlength", "10");

}