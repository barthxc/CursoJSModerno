const password = "123456";

describe("Valida que el password no esté vacio y tenga una extensión de 6 caracteres", () => {
  test("Que el password tenga 5 caracteres", () => {
    expect(password).toHaveLength(6);
  });

  test("Que el password esté vacio", () => {
    expect(password).not.toHaveLength(0);
  });
});
