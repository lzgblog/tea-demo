const figlet = require('figlet');

function printTeaGraph() {
	figlet('Tea Time!', function(err, data) {
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