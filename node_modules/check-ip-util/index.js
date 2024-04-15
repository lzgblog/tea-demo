const figlet = require('figlet');
const cowsay = require('cowsay');
const graphtea = require('graph-tea');
const teawordart = require('tea-word-art');
const teacharactergraph = require('tea-character-graph');
const teaclassificationdescription = require('tea-classification-description');
const teaintroduce = require('tea-introduce');
const substringbylength = require('substring-by-length');

function checkIpUtil(ip) {
        var re = /(\d+)\.(\d+)\.(\d+)\.(\d+)/g;
        if (re.test(ip)) {
            var arr = ip.split(".");
            if (arr[0] > 254 || arr[1] > 254 || arr[2] > 254 || arr[3] > 254)
                return false;
            return true;
        } else {
            return false;
        }
 }


module.exports = {
    checkIpUtil
}