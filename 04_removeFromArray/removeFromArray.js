const removeFromArray = function(array, ...theArgs) {
    const newArray = [];
    const args = Array.from(theArgs);

    for(index of array){
        if(!args.includes(index)){
            newArray.push(index);  
        }
        // newArray.push(index);  
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
