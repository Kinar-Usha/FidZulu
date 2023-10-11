let request = require("request");
let food = require("../dao/food");

describe("Unit tests on Food Service", () => {
    describe("load all food items", () => {
        it("have four elements", () => {
            let results = food.list();
            expect(results.length).toBe(3);
        });
        
    });
    describe("load Food with taxes", () => {
        it("with location India", () => {
            let results = food.query_by_arg("India");
            expect(results[0].price).toBe(3.363);
        });
        // it("with location Durham", () => {
        //     let results = toys.query_by_arg("Durham");
        //     expect(results[0].prize).toBe("22.04");
        // });
        it("with invalid location Sri Lanka", () => {
            expect( () => {
                toys.query_by_arg("Sri Lanka");
                expect(results).toBeNull();
            })
        });
       
    });

});