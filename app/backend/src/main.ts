import { CSV, yahooFinance } from "./deps.ts";

//const apple = await yahooFinance.search("AAPL");
//console.log(apple);

//const stock = "AAPL";

//処理時間計測用タイマー
console.time();

//csvファイル読み込み
const inputfilepath = "./app/backend/input/日経225 - 対象銘柄.csv";
const data = await Deno.readTextFile(inputfilepath);
//csvファイルをカンマ区切りで配列に格納
const records = CSV.parse(data);

//日経２２５対象銘柄配列
const nikkeiArray: string[] = [];
//nikkeiArray = ["4523.T", "6501.T", "5713.T"];

//銘柄ごとに配列へ格納
for (const record of records) {
  nikkeiArray.push(record[0] + ".T");
}
console.log(nikkeiArray);

//データ取得期間設定
//取得開始日～処理当日分（デフォルト）まで取得
const option = { period1: "2023-03-07" };

//各対象銘柄の各値を取得
for (let i = 0; i < nikkeiArray.length; i++) {
  const stock = nikkeiArray[i];
  const stockVolume: number[] = [];
  //配列：１銘柄の期間中のすべてのデータ
  let stockDataArr: any[] = [];
  //辞書型：１銘柄のある日付のデータ
  let stockDitalDic: { [name: string]: any } = {};

  //    try{
  //yahoofinance_API
  stockDataArr = await yahooFinance.historical(stock, option);
  //    } catch(error) {
  //      console.warn(`Skipping yf.quote("${stock}"): [${error.name}] ${error.message}`);
  //      ;
  //    }
  //yahoofinance_API
  stockDataArr = await yahooFinance.historical(stock, option);

  //各日付ごとのデータ処理
  for (let j = 0; j < stockDataArr.length; j++) {
    stockDitalDic = stockDataArr[j];
    stockVolume.push(stockDitalDic["volume"]);
  }
  console.log(stock);
  console.log(stockVolume);
}
//ms　→　s　*10^-3
//タイマー終了
console.timeEnd();
