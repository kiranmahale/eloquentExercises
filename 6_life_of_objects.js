function test(type){
	this.type = type;
}
test.prototype.speak = function(line){
	console.log("Hi "+this.type+":"+line+" test" );
}
testobj = new test("object");