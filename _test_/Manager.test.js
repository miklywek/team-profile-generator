const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("creates a manager object", () => {
  const manager = new Manager("Manager1");

  expect(typeof manager).toBe("object");
});
