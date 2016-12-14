//First exercise
function Range(start , end, step){
	if(isNaN(start) || isNaN(end) || isNaN(step) ){ return [];}
	if (step == undefined) {step = 1;}
	var arr = [];
	if(step > 0){
		for(var i = start; i <= end; i = i+step ){
			arr.push(i);
		}
	}else if(step < 0){
		for(var i = end; i >= start; i = i + step ){
			arr.push(i);
		}
	}
	return arr;
}
function sum(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}