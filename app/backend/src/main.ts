import { yahooFinance } from "./deps.ts";

//const apple = await yahooFinance.search("AAPL");
//console.log(apple);

//const stock = "AAPL";

//日経２２５対象銘柄配列
let nikkeiArray: string[] = [];
nikkeiArray = ["4523.T", "6501.T", "5713.T"];

//データ取得期間設定
//取得開始日～処理当日分（デフォルト）まで取得
const option = { period1: "2023-02-27" };

//各対象銘柄の各値を取得
for (let i = 0; i < nikkeiArray.length; i++) {
  const stock = nikkeiArray[i];
  const result: number[] = [];
  //配列：１銘柄の期間中のすべてのデータ
  let stockDataArr: any[] = [];
  //辞書型：１銘柄のある日付のデータ
  let stockDitalDic: { [name: string]: any } = {};

  //yahoofinance_API
  stockDataArr = await yahooFinance.historical(stock, option);

  //各日付ごとのデータ処理
  for (let j = 0; j < stockDataArr.length; j++) {
    stockDitalDic = stockDataArr[j];
    result.push(stockDitalDic["volume"]);
  }
  console.log(stock);
  console.log(result);
}
