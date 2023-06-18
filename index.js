// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
    customerName =  customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    return bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Karen";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Sandy";
}
