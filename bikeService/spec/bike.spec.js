const request = require('request');
const app = require('../index');
var http = require('http');

const base_url = 'http://localhost:3004/';
const bikes_url = base_url + 'bikes/India';
const not_found_url = base_url + 'bikes/';

app.set('port', 3004);

describe("Bikes Server E2E Test", function () {
    let server;
    
    beforeAll(() => {
        server = http.createServer(app);
        server.listen(3004);
    });
    afterAll((done) => {
        
      server.close(done); // Shutdown the server after tests are complete
    });
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