const assert = require("assert");
const fetch = require("node-fetch")

describe("get user", function () {
    it("get list user", async function () {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        //console.log(data);
        assert.strictEqual(response.status,200);
    });
});