const palindromes = function (entry) {
    let newEntry = entry.replace(/[^a-z0-9]/gi, '');
    return newEntry.toLowerCase().split("").reverse().join("") === newEntry.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
