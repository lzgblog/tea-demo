const figlet = require('figlet');
const cowsay = require('cowsay');
const art = require('tea-word-art');

function printTeaGraph() {
	figlet('Tea', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}


module.exports = {
    printTeaGraph
}