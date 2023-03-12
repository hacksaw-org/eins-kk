import yahooFinance from "YahooFinance";

const apple = await yahooFinance.search("AAPL");
console.log(apple);
