exports.prime = function(num) {
	var flag = true;
	for(var i = 2; i < num; i++) {
		if(num % i == 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

exports.odd = function(num) {
	var flag = false;	
	if(num % 2 != 0) {
		flag = true;
	}
	return flag;
}

exports.even = function(num) {
	var flag = false;
	if(num % 2 == 0) {
		flag = true;
	}
	return flag;	
}

exports.fact = function(num) {
	var fact = 1;
	if(num > 1) {
		while(num > 1) {
			fact = fact * num;
			num--;
		}
	}
	return fact;
}

