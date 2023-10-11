const request = require('request');
const app = require('../index');
var http = require('http');



const base_url = 'http://localhost:3002/';
const toys_url = base_url + 'food/India';
const not_found_url = base_url + 'food/';

app.set('port', 3002);

describe("Toys server  endpoint tests", function () {
    let server;

    beforeAll(() => {
        server = http.createServer(app);
        server.listen(3002);
    });
  
    afterAll((done) => {
        
      server.close(done); // Shutdown the server after tests are complete
    });
    
    describe("GET Indian Foods", () => {
        it("returns status code 200",  (done) => {
            request.get(toys_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains calories", (done) => {
            request.get(toys_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("calories");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /food/", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    describe("GET /toys/Sri Lanka", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url + "Sri Lanka", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});