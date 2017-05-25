//We can declare a function in pure javascript like
var power = function(base,exponent){
	var result = 1;
	for(var count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
}

//*************************************Exercise******************************************
//will count the no of b's in a string
function countBs(str){
	var count = 0;
	var bs = 0;
	while(str.length > count){
		if (str[count] === "b")
			bs++;
		count ++;
	}
	return bs;
}

//Closure - being able to reference a specific instance of local variables in an function called
function firstNumber(first){
	return function secondNumber(second){
		return first + second;
	}
}