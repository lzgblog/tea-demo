const teaclassificationdescription = require('tea-classification-description');
const teaintroduce = require('tea-introduce');
const substringbylength = require('substring-by-length');
//格式化用户名显示，2字屏蔽第1位，用*号代替，3字屏蔽第2位，用*号代替，3字以上，显示第1位和最后1位，其余用*号代替，最多使用5位*
function formatUsername(name) {
	if (isUndefined(name) && isNull(name)) {
		return "";
	}
	var res = "";
	if (name.length == 1) {
		res += name;
	}

	if (name.length == 2) {
		res += "*";
		res += name.substring(name.length - 1);
	}
	if (name.length == 3) {
		res += name.substring(0, 1);
		res += "*";
		res += name.substring(2);
	}
	if (name.length > 3) {
		res += name.substring(0, 1);
		for(let i=0; i<name.length - 2; i++) {
			if(i <= 4) {
				res += "*";
			} else {
				break;
			}
		}
		res += name.substring(name.length - 1, name.length);
	}
	return res;
}
module.exports = {
    formatUsername
}
