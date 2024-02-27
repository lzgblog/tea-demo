const figlet = require('figlet');
const teaart = require('tea-word-art');


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