function displayToValue(value)
{
    document.getElementById('display').value +=value;
}


function clearDisplay()
{
    document.getElementById('display').value='';
}

function calculator()
{
    var display= document.getElementById('display').value;
    var result =eval(display);

    if (result=="0")
    {
       isNaN. document.getElementById('display').value='';
    }
    document.getElementById('display').value=result;

}