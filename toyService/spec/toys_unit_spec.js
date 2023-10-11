let request = require("request");
let toys = require("../dao/toys");

describe("Unit tests on toys module", () => {
    
    describe("load toys with taxes", () => {
        it("with location India", async () => {
            let results =await toys.getToys("IN");
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("with location Ireland",async () => {
            let results = await toys.getToys("IE");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);


        });
        it("with invalid location China", () => {
            expect( () => {
                toys.getToys("China");
                expect(results).toBeNull();
            })
        });
       
    });

});