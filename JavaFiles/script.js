function showMes()
{
	alert("Выбран первый пункт");
	
}

function calcArea()
{
	var a,b,s;
	a = document.forma1.t1.value;
	b = document.forma1.t2.value;
	s = a * b;
	document.forma1.res.value = s;
}

function showDesc(obj, n)
{
 	obj.desc.value=n;
} 
function delet(obj)
{
	 obj.desc.value=' ';
} 