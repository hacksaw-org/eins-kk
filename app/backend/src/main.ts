import { yahooFinance } from "./deps.ts";

const apple = await yahooFinance.search("AAPL");
console.log(apple);
