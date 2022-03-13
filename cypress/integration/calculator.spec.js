const BASE_URL = "http://localhost:5500";

const clickDigit = digit => cy.get(".digit").contains(digit).click();
const clickOperator = operator =>
  cy.get(".operation").contains(operator).click();
const clickAC = () => cy.get(".modifier").click();
const checkTotal = total => cy.get("#total").should("have.text", total);

describe("계산기 테스트", () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  describe("연산이 가능하다.", () => {
    it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
      clickDigit(1);
      clickDigit(0);
      clickOperator("+");
      clickDigit(1);
      clickDigit(1);
      clickOperator("=");
      checkTotal(21);
    });
  });
});
