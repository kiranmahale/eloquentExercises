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