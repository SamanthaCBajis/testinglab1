// These test cases are all unfinished. We will finish them together.
describe("tests for ChangeHandler", function() {
    it("alsjdalsjdnaskjd", function () {
        expect(ChangeHandler).toBeDefined();
    });
    it("initialize ChangeHandler", function() {
        var vendingMachine = new ChangeHandler({
            amountDue: amountDue,
            cashTendered: 0
        });
        expect(vendingMachine.amountDue).toBe(amountDue);
        expect(vendingMachine.cashTendered).toBe(0);
    });
    // Set up a test below...
    describe("tests for change-handler", function() {
    it("does something (change this)", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(vendingMachine).toBeDefined();
    });

});
it("does something (change this)", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(vendingMachine.amountDue).toBeDefined();
});
it("does something (change this)", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(vendingMachine.cashTendered).toBeDefined();
});
it("does something (change this)", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(vendingMachine.insertCoin).toBeDefined();
});
// it("does something (change this)", function() {
//     // Remember, you can arrange, act, and assert...start small
//     expect(vendingMachine.insertCoin(type)).toBe("quarter");
// });
});

// it("does something (change this)", function() {
//     // Remember, you can arrange, act, and assert...start small
//     expect(vendingMachine.isPaymentSufficient).toBeDefined();
// });
// it("does something (change this)", function() {
//     // Remember, you can arrange, act, and assert...start small
//     expect(vendingMachine.isPaymentSufficient()).toBe(true);
// });
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

it("Payment Sufficient Check", function() {
 expect(vendingMachine.isPaymentSufficient).toBeDefined();
});
it("test Payment Sufficient", function() {
     expect(vendingMachine.isPaymentSufficient()).toBe(true)
     expect(vendingMachine.isPaymentSufficient()).toBe(false)
 });
});