const employee = require("../lib/employee")

test("start employee instance", () => {
    const newbie = new employee();
    expect(typeof(newbie)).toBe("object");
});

test("sets name using constructor", () => {
    const name = "Alice";
    const newbie = new employee(name);
    expect(newbie.name).toBe(name);
});

test("set id using constructor"), () => {
    const testValue = 100;
    const newbie = new employee("Woo," testValue)
}

