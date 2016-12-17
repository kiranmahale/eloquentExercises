function arrayToList(arr){
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

function nth(n, list){
	for(var node = list; node; node = node.rest ){
		n--;
		if(n == 0){
		return node.value;
	}
	}
}
function rec_nth(n,list){
	debugger;
	if(n==1){
		return list.value;
	}else{
		rec_nth(n = n-1,list.rest);
	}
}