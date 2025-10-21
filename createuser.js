const { expect } = require("chai");
const fetch = require("node-fetch")

describe("create user", () => {
  it("post create user", async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
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
    console.log(data);

    expect(response.status).to.equal(201);
    expect(data.name).to.equal("reskhi");
    expect(data.job).to.equal("QA");
  });
});