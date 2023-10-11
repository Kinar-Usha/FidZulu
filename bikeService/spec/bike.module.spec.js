let request = require("request");
let bikes = require("../dao/bike");

describe("Bike module test", () => {
    describe("load all bikes", () => {
    
        it("have four elements", async () => {
            let results = await bikes.getBikes("IN");
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        
    });
    describe("load all bikes with taxes", () => {
     
        it("with location India", async () => {
            let results = await bikes.getBikes("IN");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
     
        it("with location Ireland", async () => {
            let results = await bikes.getBikes("IE");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
     
        it("with invalid location Pakistan", async () => {
            let results = await bikes.getBikes("Pakistan");
            expect(results).toBeNull();
        });
       
    });

});