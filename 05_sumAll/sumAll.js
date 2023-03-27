const sumAll = function(first, second) {
    if (typeof(first) !== 'number' || typeof(second) !== 'number' || Math.min(first, second) < 0){
        return 'ERROR';
    }
    let answer = 0;
    let lower = Math.min(first, second);
    let higher = Math.max(first,second);
    for (let i = lower; i <= higher; i++){
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
