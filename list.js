function arraToList(arr){
	var list = null;
	for(var i = arr.length; i >= 0; i--){
		list = {value: arr[i], rest: list};
	}
	return list;
}

function listToarray(){
	
}