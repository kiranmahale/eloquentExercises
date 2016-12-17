function arraToList(arr){
	var list = null;
	for(var i = arr.length -1; i >= 0; i--){
		list = {value: arr[i], rest: list};
	}
	return list;
}

function listToarray(list){
	var arr = [];
	for(var node=list; node; node = node.rest){
		arr.push(node.value);
	}
	return arr;
}