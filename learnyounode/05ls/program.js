var fs = require('fs');
var path = require('path');
var target = process.argv[3];
//先頭文字を検索
if(target.match(/^\./)){
	// console.log("ドットがある"+target);	
}else{
	target = "." + target;
	// console.log('add dot '+target);
}

fs.readdir(process.argv[2], function(err, list){
	for(var i = 0; i < list.length; i++){
		if(path.extname(list[i]) == target){
	    	console.log(list[i]);
	    }
	}
	
})
