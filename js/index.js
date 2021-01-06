var num=0;
var bool=0;
var result=0;
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
	result=eval(document.getElementById('screen').value);
	document.getElementById('screen').value += "="+eval(document.getElementById('screen').value );
	
}
function getresult()
{
	result=eval(document.getElementById('screen').value);
}
function change()
{
	bool=1;
}
function check1()
{
		if(bool==1)
		{
			gl();
			bool=0;
		}
}
function check2()
{
	if(bool==1)
		{
			gl();
			bool=0;
			document.getElementById('screen').value=result;
		}
}