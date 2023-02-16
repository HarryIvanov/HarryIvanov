describe("PaymentPackage", () => {
  describe("create instance", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Todor", 10);
    });


    it("name should be correct", () => {
      assert.equal(paymentPackage._name, "Todor", "name has correct");
    });
    it("value should be corrext", () => {
      assert.equal(paymentPackage._value, 10, "value has correct set to 10");
    });
    it("vat should be correct", () => {
      assert.equal(paymentPackage._VAT, 20, "default value is set correct");
      assert.equal(typeof paymentPackage._VAT, "number", "vat is correct");
    });
    it("active should be correct", () => {
      assert.equal(paymentPackage._active, true, "active is correct");
      assert.equal(typeof paymentPackage._active, "boolean", "active is ok");
    });
  });
  describe("test getters", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Todor", 10);
    });
    it("istance should be correct", () => {
      assert.equal(paymentPackage.name, "Todor");
    });
    it("istance should return correct value", () => {
      assert.equal(paymentPackage.value, 10);
    });
    it("test vat", () => {
      assert.equal(paymentPackage.VAT, 20);
    });
    it("test active", () => {
      assert.equal(paymentPackage.active, true);
    });
  });
  describe("test setters", () => {
    it("test incorrect name", () => {
      assert.throws(() => {
        new PaymentPackage(10, 10);
      }, "Name must be a non-empty string");
    });
    it("set incorrect name", () => {
      assert.throws(() => {
        new PaymentPackage("", 10);
      }, "Name must be a non-empty string");
    });
    it("set correct name", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      paymentPackage.name = "Gosho";
      assert.equal(paymentPackage.name, "Gosho");
    });
    it("set incorrect value", () => {
      assert.throws(() => {
        new PaymentPackage("Todor", "10");
      }, "Value must be a non-negative number");
    });
    it("set negative value", () => {
      assert.throws(() => {
        new PaymentPackage("Todor", -1);
      }, "Value must be a non-negative number");
    });
    it("set correct value", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      assert.equal(paymentPackage.value, 10);
      paymentPackage.value = 50;
      assert.equal(paymentPackage.value, 50);
      paymentPackage.value = 0;
      assert.equal(paymentPackage.value, 0)
    });
    it("set incorrect VAT", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      assert.throws(() => {
        paymentPackage.VAT = "Gosho";
      }, "VAT must be a non-negative number");
    });
    it("set negative VAT", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      assert.throws(() => {
        paymentPackage.VAT = -1;
      }, "VAT must be a non-negative number");
    });
    it("set correct VAT", () => {
      let paymentPackage = new PaymentPackage("Todor", 20);
      assert.equal(paymentPackage.VAT, 20);
      paymentPackage.VAT = 50;
      assert.equal(paymentPackage.VAT, 50);
    });
    it("set incorrect status", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      assert.throws(() => {
        paymentPackage.active = "Gosho";
      }, "Active status must be a boolean");
    });
    it("set correct status", () => {
      let paymentPackage = new PaymentPackage("Todor", 10);
      assert.equal(paymentPackage.active, true);
      paymentPackage.active = false;
      assert.equal(paymentPackage.active, false);
    });
  });
  describe("toString", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Todor", 10);
    });
    it("tests active state", () => {
      const output = [
        `Package: Todor`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      assert.equal(paymentPackage.toString(), output)
    });
    it("tests not active state", () => {
      const output = [
        `Package: Todor` ('inactive'),
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      paymentPackage.active = false;
      assert.equal(paymentPackage.toString(), output)
    });
    
  });
});
