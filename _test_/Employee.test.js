const Employee = require("../lib/Employee");
test("create an Employee obj", () => {
  const employee = new Employee();

  expect(typeOf(employee).toBe("obj"));
});
