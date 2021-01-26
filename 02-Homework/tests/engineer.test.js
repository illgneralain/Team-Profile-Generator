const engineer = require("../lib/engineer");

test("set Github account using constructor", () => {
    const testValue = "GitHubUser";
    const newbie = new engineer("Woo", 1, "test@test.com")
    expect(typeof(newbie)).toBe("object");
});

test("using getRole()", () => {
    const testValue = "Engineer";
    const newbie = new engineer
}