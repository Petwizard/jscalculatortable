function Multiply(){
var valueOne = firstValue.value;
var valueTwo = secondValue.value;


for (i=1; i<= Number(valueOne); i++){
// myTable.innerHTML=("")
calc = `<tr>`
    for (j=1; j<= Number(valueTwo); j++){
        calc += `<td style="background-color:silver;">${i}*${j}= ${i*j}</td>`
    }
    calc += `</tr>`
    myTable.innerHTML += calc

}
}

function Addition(){
var valueOne = firstValue.value;
var valueTwo = secondValue.value;
for (i=1; i<= Number(valueOne); i++){
// myTable.innerHTML=("")
calc = `<tr>`
    for (j=1; j<= Number(valueTwo); j++){
        calc += `<td style="background-color:silver;">${i}+${j}= ${i+j}</td>`
    }
    calc += `</tr>`
    myTable.innerHTML += calc

}

}

function Subtraction() 
{
var valueOne = firstValue.value;
var valueTwo = secondValue.value;
for (i=1; i<= Number(valueOne); i++){
// myTable.innerHTML=("")
calc = `<tr>`
    for (j=1; j<= Number(valueTwo); j++){
        calc += `<td style="background-color:silver;">${i}-${j}= ${i-j}</td>`
    }
    calc += `</tr>`
    myTable.innerHTML += calc

}
}
function Division(){
    var valueOne = firstValue.value;
    var valueTwo = secondValue.value;
    for (i = 1; i<= Number(valueOne); i++){
        calc = `<tr>`
        for (j=1; j<= Number(valueTwo); j++){
            calc += `<td style="background-color:gold;">${i}/${j}=${i/j}</td>`
        }
        calc += `</tr>`
        myTable.innerHTML += calc
    }
}
