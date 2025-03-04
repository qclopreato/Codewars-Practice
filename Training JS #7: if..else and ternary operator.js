/*Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.

Sample Tests:
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(saleHotdogs(1),100);
    Test.assertSimilar(saleHotdogs(4),400);
    Test.assertSimilar(saleHotdogs(5),475);
    Test.assertSimilar(saleHotdogs(9),855);
    Test.assertSimilar(saleHotdogs(10),900);
    Test.assertSimilar(saleHotdogs(100),9000);
  });
});*/

function saleHotdogs(n){
  return n<5 ? 100 * n : n>=10 ? 90 * n : 95 * n;
}
