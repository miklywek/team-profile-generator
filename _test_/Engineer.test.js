const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("creates an engineer object", () => {
  const engineer = new Engineer("Engineer1");

  expect(typeof engineer).toBe("object");
});
