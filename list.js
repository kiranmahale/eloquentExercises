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

function deepEqual(obj1,obj2){
	var i = j = 0;
	if(typeof(obj1) === "object" && typeof(obj2) === "object"){
		for(var p1 in obj1)	j = j+1;
		for(var p2 in obj2) i = i+1;
		if( i != j ){
			return false ;
		}else{
			for(var k = 0; k < obj1.length; k++){
				if()
			}
		}
	}else{ return "NaO";}
}