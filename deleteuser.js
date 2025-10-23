const { expect } = require("chai");
const fetch = require("node-fetch");

describe("delete user", () => {
  it("delete user", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      }
    });

    console.log("Status delete:", response.status);
    expect(response.status).to.equal(204);
  });

});
