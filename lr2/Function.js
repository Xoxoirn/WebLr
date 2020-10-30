function ReturnArg(arg) 
{
    return arg;
}
function ReturnSumArg(arg1, arg2) 
{
    return arg1 + arg2;
}

function Massiv() 
{
    console.log("Массив в функции для обработки");
	var Arr = [0, 5, 10, "one", -5, "two", "three"];
	console.log(Arr);

	for(var i = 0; i < Arr.length; i++)
	{
		if (isNaN(Arr[i]))
			Arr[i] = 0;
		else
			Arr[i] *= Arr[i];
	}
	console.log("Массив в функции после обработки");
	console.log(Arr);
}

function changeImage(src)
{
	document.getElementById('image').src = src;
}