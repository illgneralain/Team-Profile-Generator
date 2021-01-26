const intern = require("../lib/intern");

test("set school using constructor", () => {
    const testValue = "NYU";
    const newbie = new intern("Woo", 1, "test@test.com", testValue);
    expect(newbie.school).toBe(testValue);
});

