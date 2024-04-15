const figlet = require('figlet');
const cowsay = require('cowsay');

function substringByLength(n) {
        var str = this;
        var arr = [];
        var len = Math.ceil(str.length / n);
        for (var i = 0; i < len; i++) {
            if (str.length >= n) {
                var strCut = str.substring(0, n);
                arr.push(strCut);
                str = str.substring(n);
            } else {
                arr.push(str);
            }
        }
        return arr;
 };


module.exports = {
    substringByLength
}