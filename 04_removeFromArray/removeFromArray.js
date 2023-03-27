const removeFromArray = function(numberList, ...numbers) {
    let filteredArray = numberList;
    for (let i = 0; i < numbers.length; i++){
        filteredArray = filteredArray.filter((number) => number !== numbers[i])
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
