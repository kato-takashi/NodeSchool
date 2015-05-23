var firstNum = 2;
var lastNum = process.argv.length;
var sum = 0;
var subSum = 0;


	for(var i = firstNum; i < lastNum; i++){
		subSum = Number(process.argv[i]);
		sum += subSum;
	}
	console.log(sum);
