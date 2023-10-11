let request = require("request");
let food = require("../dao/food");

describe("Unit tests on Food Service", () => {
    describe("load all food items", () => {
        it("have four elements", () => {
            let results = food.list();
            expect(results.length>1);
        });
        
    });
    describe("load Food with taxes", () => {
        it("with location India", () => {
            let results = food.foodByLocation("IN");
            expect(results[0].price).toBe(118);
        });
        it("with location US", () => {
            let results = food.foodByLocation("US-NC");
            expect(results[0].rating).toBe(4.5);
        });
        it("with location Ireland", () => {
            let results = food.foodByLocation("IN");
            expect(results[0].rating).toBe(4.5);
        });
        it("get service team", () => {
            let results = food.foodServiceTeam();
            expect(results.name).toBe("Food Service team");
        });
        it("with invalid location Sri Lanka", () => {
            expect( () => {
                toys.foodByLocation("Sri Lanka");
                expect(results).toBeNull();
            })
        });
       
    });

});