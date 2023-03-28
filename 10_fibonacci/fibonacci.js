const fibonacci = function(number) {
    if (parseInt(number) < 1){
        return "OOPS";
    }
    if (parseInt(number) === 1){
        return 1;
    }
    else if (parseInt(number) === 2){
        return 1;
    }
    else {
        return fibonacci(parseInt(number) - 1) + fibonacci(parseInt(number) - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
