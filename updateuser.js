const { expect } = require("chai");
const fetch = require("node-fetch")

describe("update user", () => {
    it("pacth update user", async () => {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "patch",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "reskhi",
                job: "QA",
            }),
        });
        const data = await response.json();
        //console.log(data);
        expect(response.status).to.equal(200);
        expect(data.name).to.include("reskhi");
    });
});