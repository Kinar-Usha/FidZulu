const request = require('request');
const app = require('../index');
var http = require('http');



const base_url = 'http://localhost:3002/';
const foodIndia_Url = base_url +'foodService/all/IN';
const foodUs_Url=base_url + 'foodService/all/US-NC';
const foodIreland_Url=base_url + 'foodService/all/IE';
const not_found_url = base_url + 'foodService/all/';
const team_url=base_url+'foodService/team'

app.set('port', 3002);

describe("Food server  endpoint tests",function () {
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
            request.get(foodIndia_Url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains calories", (done) => {
            request.get(foodIndia_Url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("calories");
                done();
            });
        });
    });
    describe("GET US Foods", () => {
        it("returns status code 200",  (done) => {
            request.get(foodUs_Url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains calories", (done) => {
            request.get(foodUs_Url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("vegetarian");
                done();
            });
        });
    });
    describe("GET Ireland Foods", () => {
        it("returns status code 200",  (done) => {
            request.get(foodIreland_Url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains calories", (done) => {
            request.get(foodIreland_Url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("bestBefore");
                done();
            });
        });
    });
    describe("Get service team", () => {
        it("returns status code 200",  (done) => {
            request.get(team_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(body).toContain("name");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("Get Error when no location provided", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    describe("Get Error for invalid city", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url + "Sri Lanka", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});