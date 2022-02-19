function mean(values){
    let myMean = values.reduce(function(prevVal,currentVal){
        return prevVal + currentVal;
    });
    myMean = myMean/values.length;
    return myMean;
}
function median(values){
    values.sort(function(a,b){return a-b});
    let medianIndex = parseInt(values.length/2);
    let myMedian;
    if(values.length % 2 == 0){
        myMedian = mean([values[medianIndex-1], values[medianIndex]]);
    }
    else{
        myMedian = values[medianIndex];
    }
    return myMedian;
}
function getNumberRepeats(values,input){
    let amount = values.filter(function(x){
        return x === input;
    });
    amount = amount.length;
    return amount;
}
function mode(values){
    let modeValues = [];
    let uniqueValues = values.filter(function(value,index,self){
        return self.indexOf(value) === index;
    });
    for(let i of uniqueValues){
        let repeats = getNumberRepeats(values,i);
        if(!modeValues.some(function(x){
            return getNumberRepeats(values,x) >= repeats;
        })){
            modeValues = [];
            modeValues.push(i);
        }
        else if(modeValues.some(function(x){
            return getNumberRepeats(values,x) === repeats;
        })){
           modeValues.push(i); 
        }
    }
    return modeValues;
}

function calculate(){
    let myString = document.getElementById("list").value;
    let values = myString.split(' ');
    values = values.map(function(x){
        return parseFloat(x);
    });
    document.getElementById("mean").innerHTML ="Mean: " + mean(values);
    document.getElementById("median").innerHTML = "Median: " + median(values);
    document.getElementById("mode").innerHTML = "Mode: " + mode(values);
}