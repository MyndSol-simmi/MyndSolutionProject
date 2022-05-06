var ResponseModel = [];
const fetch = typeof window !== 'undefined'
    ? window.fetch
    : require('fs');
function response() {
    var myDataRes = JSON.parse(data);
    myDataRes.forEach(responseJson);
    const output = JSON.stringify(ResponseModel);
    alert(output);
    console.log(output);

}
function responseJson(item, index, arr) {
    var Id = arr[index].FieldID;
   
    //TextBoxValue
    var sel2 = '#TextInput' + Id;
    var responseVal = $(sel2).val();

    //DropDown Value
    if (arr[index].FieldType == "Drop Down") {
        var sel2 = '#option' + Id;
       responseVal = $(sel2).val();
        //var responseVal = document.getElementById("option").value
    }
    var Request =
    {
        FieldID: arr[index].FieldID,
        FieldType: arr[index].FieldType,
        displayName: arr[index].displayName,
        displayOrder: arr[index].displayOrder,
        IsRequired: arr[index].IsRequired
    };
    var Response =
    {
        key: "",
        value: responseVal
    };

    //ResponseModel = [{ Request, Response }];
    ResponseModel.push({ Request, Response });
}