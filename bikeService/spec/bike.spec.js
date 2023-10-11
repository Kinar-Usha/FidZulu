const request = require("request");

const base_url = 'http://localhost:3031/';
const bikes_url = base_url + 'bikes/India';
const not_found_url = base_url + 'bikes/';


describe("Bikes Server E2E Test", function () {
    describe("GET /bikes/India", () => {
        it("returns status code 200",  (done) => {
            request.get(bikes_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains price", (done) => {
            request.get(bikes_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("price");
                expect(body).toContain("productName");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /bikes/", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET with localhost:3031", () => {
        it("returns status code 404",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    describe("GET /bikes/Pakistan", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url + "China", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});