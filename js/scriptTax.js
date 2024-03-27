// Vinamra Bhavsar n01650344
const $ = (selector) => document.querySelector(selector);

function processEntries(){
    let income = $("#income").value;
    let taxableAmount = 0;
    if(income == ""){
        alert("Income : field is mandatory.");
        clearData();
        return;
    }
    else if(isNaN(income) || (parseInt(income)<0 || parseInt(income)>99999999)){
        alert("Taxable Income : must be a number and it should be > 0 and < 99999999");
        clearData();
        return;
    }else{
        income = parseInt(income);
        taxableAmount = calculateTax(income);
        $("#tax_owed").value = taxableAmount.toFixed(2);
    }
}

function calculateTax(income){
    let taxableAmount = 0;
    const taxArray = [0,9875,40125,85525,163300,207350,518400];
    const taxpercentArray = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];

    for(let i in taxArray){
        i = parseInt(i);
       
        if(taxArray[i+1] != undefined && taxArray[i]<=income && income<taxArray[i+1]){
            taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
            break;
        }else{
            if(taxArray[i+1] == undefined){
                taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
                break;
            }else{
                taxableAmount += (taxArray[i+1]-taxArray[i]) * taxpercentArray[i];
            }
        }
        
    }
    return taxableAmount;


    // for(let i in taxArray){
    //     i = parseInt(i);
    //     console.log("i : " + i);
    //     if(i == taxArray.length){
    //         console.log("--------------------");
    //         taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
    //         break;
    //     }else{
    //         if(taxArray[i+1] != undefined && taxArray[i]<=income && income<taxArray[i+1]){
    //             taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
    //             break;
    //         }else{
    //             if(taxArray[i+1] == undefined){
    //                 taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
    //                 break;
    //             }else{
    //                 taxableAmount += (taxArray[i+1]-taxArray[i]) * taxpercentArray[i];
    //             }
    //         }
    //     }

    // }
    // return taxableAmount;



    // let taxableAmount = 0;
    // if(income>0 && income<=9875){
    //     taxableAmount += income * 0.10;
    //     income -=  9875;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>9875 && income<=40125){
    //     income -=  9875;
    //     if(income>9875){
    //        taxableAmount += ((income * 0.12)+987.5);
    //     }else{
    //         taxableAmount = 987.5;
    //     }
    //     income -= 40125;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>40125 && income<=85525){
    //     income -= 40125;
    //     if(income>40125){
    //         taxableAmount += ((income * 0.22)+987.5+3630); // 3630 because (40125 - 9875)*0.12
    //     }else{
    //         taxableAmount = 987.5+3630;
    //     }
    //     income -= 85525;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>85525 && income<=163300){
    //     income -= 85525;
    //     if(income>85525){
    //         taxableAmount += ((income * 0.24)+987.5+3630+9988);
    //     }else{
    //         taxableAmount = 987.5+3630+9988;
    //     }
    //     income -= 163300;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>163300 && income<=207350){
    //     income -= 163300;
    //     if(income>163300){
    //         taxableAmount += ((income * 0.32)+987.5+3630+9988+18666);
    //     }else{
    //         taxableAmount = 987.5+3630+9988+18666;
    //     }
    //     income -= 207350;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>207350 && income<=518400){
    //     income -= 207350;
    //     if(income>207350){
    //         taxableAmount += ((income * 0.35)+987.5+3630+9988+18666+14096);
    //     }else{
    //         taxableAmount = 987.5+3630+9988+18666+14096;
    //     }
    //     income -= 207350;
    //     if(income<=0){
    //         return taxableAmount;
    //     }
    // }
    // if(income>518400){
    //     income -= 207350;
    //     if(income>518400){
    //         taxableAmount += ((income * 0.37)+987.5+3630+9988+18666+14096+108867.50);
    //     }else{
    //         taxableAmount = 987.5+3630+9988+18666+14096+108867.50;
    //     }
    //     return taxableAmount;
    // }
}

function clearData(){
    $("#income").focus();
    $("#income").select();
    $("#income").value = "";
    $("#tax_owed").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#income").focus();
    $("#income").select();
    $("#calculate").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});