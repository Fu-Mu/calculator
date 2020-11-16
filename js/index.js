var num=0;
function sr(num)
{
	document.getElementById('screen').value += document.getElementById(num).value;
}
function gl()
{
	document.getElementById('screen').value="";
}
function js()
{
	document.getElementById('screen').value += "="+eval(document.getElementById('screen').value );
}