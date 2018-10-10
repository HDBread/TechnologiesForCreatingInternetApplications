function sqrSum(obj)
{
	var List = [];
	var Sum = 0;
	var rand = 0;
	var number = 0;
	for (var i = 0; i < 4; i++) 
	{
		rand = Math.random();
		number = Math.floor(rand * 10);
		number *= number; 
		List.push(number);	
		Sum += number;
	}
	obj.res.value = List + ' = ' + Sum;	
}

function DiffTime(obj)
{
	var day = new Date();
	var CurrentDay = day.getDate();
	var Difference = (CurrentDay - 1) * 24;
	var Hours = day.getHours();
	var Minutes = day.getMinutes();
	var Res = Difference + Hours;
	obj.desc.value = Res + ":" + Minutes;
}

function dragStart(event) 
{
    event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) 
{
    
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

