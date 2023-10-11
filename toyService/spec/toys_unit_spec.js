let request = require("request");
let toys = require("../dao/toys");

describe("Unit tests on toys module", () => {
    
    describe("load toys with taxes", () => {
        it("with location Raleigh", async () => {
            let results =await toys.query_by_arg("Raleigh");
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("with location Durham",async () => {
            let results = await toys.query_by_arg("Durham");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);


        });
        it("with invalid location China", () => {
            expect( () => {
                toys.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});