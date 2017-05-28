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

function chessBoard(size){
	var str = "";
	for(var i = 0; i < size; i++){
		for(var j = 0 ; j < size; j++ ){
			if((j + i) % 2 == 0){
				str += "-";
			}else{
				str += "#";
			}
		}
		str += "\n";
	}
	return str;
}
//Recursion
function power(base,exponent){
	if(exponent == 0)
		return 1;
	else
		return base * power(base,exponent-1);
}

function min(x,y){
	if(x <= y)
		return x;
	else
		return y;
}

// Your code here.
function isEven(number){
	  if(number < 0)
        return isEven(-number);//learned
	  else if(number == 0)
    	return true;
      else if(number == 1)
        return false;
      else 
        return isEven(number-2);
}