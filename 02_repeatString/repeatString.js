const repeatString = function(string, num) {
    let messsage = '';
    if (num < 0) {return ("ERROR")} 
    else {
        for (let i=0; i<num; i++) {
            messsage += string;
        }
        return messsage;}
};

// Do not edit below this line
module.exports = repeatString;
