const figlet = require('figlet');
const teaart = require('tea-word-art');

const teaart1 = require('tea-character-graph');
const teaart2 = require('tea-classification-description');
const teaart3 = require('tea-introduce');
const teaart4 = require('check-ip-util');
const teaart5 = require('substring-by-length');

function printTea() {
	figlet('Tea Time!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
	});

}
console.log(teaart.printTeaGraph())

module.exports = {
    printTea
}