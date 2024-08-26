const removeFromArray = function(arr, ...args) {
    let newArray =[];
    for (let element of arr) {
        if (args.includes(element)) {continue} 
        else {newArray.push(element)};
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
