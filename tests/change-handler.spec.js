// These test cases are all unfinished. We will finish them together.
describe("tests for ChangeHandler", function() {
    
    it("ChangeHandler Defined", function () {
        expect(ChangeHandler).toBeDefined();
    });
    it("initialize ChangeHandler", function() {
        let vendingMachine = new ChangeHandler({
            amountDue: amountDue,
            cashTendered: 0
        });
        expect(vendingMachine.amountDue).toBe(amountDue);
        expect(vendingMachine.cashTendered).toBe(0);
    });
    

describe("tests for insertCoin", function() {

    it("define vendingMachine.insertCoin", function() {
    expect(vendingMachine.insertCoin).toBeDefined();
    });

    it("inserting a quarter adds 25", function() {
    let vendingMachine = new ChangeHandler(100)
    vendingMachine.insertCoin("quarter")
    expect(vendingMachine.cashTendered).toBe(25);
    });
    it("inserting a dime adds 10", function() {
    let vendingMachine = new ChangeHandler(100)
    vendingMachine.insertCoin("dime")
    expect(vendingMachine.cashTendered).toBe(10);
    });
    it("inserting a nickel adds 5", function() {
    let vendingMachine = new ChangeHandler(100)
    vendingMachine.insertCoin("nickel")
    expect(vendingMachine.cashTendered).toBe(5);
    });
    it("inserting a penny adds 1", function() {
    let vendingMachine = new ChangeHandler(100)
    vendingMachine.insertCoin("penny")
    expect(vendingMachine.cashTendered).toBe(1);
    });
    });

describe("tests for isPaymentSufficient", function() {

    it("isPaymentSufficient Defined", function() {
        expect(vendingMachine.isPaymentSufficient).toBeDefined();
    });
    it("test Payment Sufficient", function() {
        let vendingMachine = new ChangeHandler(100)
        vendingMachine.isPaymentSufficient(cashtendered).toBeGreaterThanOrEqual(amountDue)
        expect(vendingMachine.cashTendered).toBe(true);
        vendingMachine.isPaymentSufficient(cashtendered).toBeLessThanOrEqual(amountDue)
        expect(vendingMachine.cashTendered).toBe(false);

    });
    });

describe("tests for giveChange", function() {
    
    it("giveChange Defined", function() {
        expect(vendingMachine.giveChange).toBeDefined();
    });

    it("32: 1, 0, 1, 2", function() {
        changeSum = 32;
        expect(vendingMachine.giveChange).toBe("quarters: 1, dimes: 0, nickels: 1, pennies: 2");
    });

    it("10: 0, 1, 0, 0", function() {
        changeSum = 10;
        expect(vendingMachine.giveChange).toBe("quarters: 0, dimes: 1, nickels: 0, pennies: 0");
    });

    it("27: 1, 0, 0, 2", function() {
        changeSum = 27;
        expect(vendingMachine.giveChange).toBe("quarters: 1, dimes: 0, nickels: 0, pennies: 2");
    });

    it("68: 2, 1, 1, 3", function() {
        changeSum = 68;
        expect(vendingMachine.giveChange).toBe("quarters: 2, dimes: 1, nickels: 1, pennies: 3");
    });
    });
});






// it("does something (change this)", function() {
//     // Remember, you can arrange, act, and assert...start small
//     expect(vendingMachine.amountDue).toBeDefined();
// });
// it("does something (change this)", function() {
//     // Remember, you can arrange, act, and assert...start small
//     expect(vendingMachine.cashTendered).toBeDefined();
// });


// it("inserting a penny adds 1 to cashtendered", function() {
//     let vendingMachine = new ChangeHandler(100)
//     // Remember, you can arrange, act, and assert...start small
//     vendingMachine.insertCoin("penny")
//     expect(vendingMachine.cashTendered).toBe(1);
// });
// it("test the varhandles", function () {
//     	let vendingMachine = new ChangeHandler(100)
//      expect(vendingMachine.amountDue).toBe(100);
// });
