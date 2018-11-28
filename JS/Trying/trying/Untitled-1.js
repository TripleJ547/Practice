function first(_callback) {
    _callback();
    console.log("hi")
}

function two() {
    var array = new Array(100000000);
    first(function () {
        console.log(array.length)
        for (let index = 0; index < array.length; index++) {
            const element = array[index];

        }
        console.log("done");
    });
}

two();