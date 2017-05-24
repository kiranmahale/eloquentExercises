// First Exercise  -----------------------------------------------------
var hashes = "";
for(var hash = 0; hash < 7; hash++){
  console.log(hashes = hashes + "#");
}

//Solution
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Second Exercise  ------------------------------------------------------
for(var n=1; n <= 100; n++){
	var str = "";
	if(n%3 == 0){
		str += "Fizz"; 
	}
	if(n%5 == 0){
		str += "Buzz"; 
	}
	console.log(str);
}

//Solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//Third Exercise   --------------------------------------------------------

//Solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
