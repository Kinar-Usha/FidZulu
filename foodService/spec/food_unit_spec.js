let request = require("request");
let food = require("../dao/food");

describe("Unit tests on Food Service",() => {
    
    describe("load Food with taxes", () => {
        it("with location India", async() => {
            let results = await food.foodByLocation("IN");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("with location US", async() => {
            let results = await food.foodByLocation("US-NC");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("with location Ireland",async () => {
            let results = await food.foodByLocation("IN");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("get service team", async() => {
            let results = await food.foodServiceTeam();
            expect(results.name).toBe("Food Service team");
        });
        it("with invalid location Sri Lanka",() => {
            expect( () => {
                 toys.foodByLocation("Sri Lanka");
                expect(results).toBeNull();
            })
        });
       
    });

});