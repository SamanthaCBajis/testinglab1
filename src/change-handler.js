/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
    if (type === "quarter"){
        this.cashtendered -= "25";
    }else if (type === "dime"){
        this.cashtendered -= "10";
    }else if (type === "nickel"){
        this.cashtendered -= "5";
    }else if (type === "penny"){
        this.cashtendered -= "1";
    }else{
        this.cashtendered;
    }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (cashtendered >= amountDue){
            return true;
        }else{
            return false;
        };
    }


    giveChange() {
        // TODO return the correct change in the following format...

        let changeSum = this.cashTendered - this.amountDue;

let current = [25, 10, 5, 1];
let amount = [0,0,0,0];

for (let i = 0; i < current.length; i++){
    for (let j = 0; (changeSum - current[i]) >= 0; j++){
            amount[i] = j+1;                                   // add +1 because the array starts/goes back to 0 always need to 
    }
}
        return {
            quarters: amount[0],
            dimes: amount[1],
            nickels: amount[2],
            pennies: amount[3],
        }
    }
}

let vendingMachine = new ChangeHandler(100);
    

// var pop = new ChangeHandler ({
//     amountDue: 0,
//     cashTendered: 0,
// });
// var pop = new ChangeHandler (amountDue);
// var candy = new ChangeHandler (10);
// var chips = new ChangeHandler (27);
// var bars = new ChangeHandler (68);

// console.log(pop.giveChange())