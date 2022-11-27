import { Hash } from "../src/index.js";

const fruitPrices = new Hash();

fruitPrices.set("apple", 25);
fruitPrices.set("banana", 15);

console.log(fruitPrices.get("apple")); // 25
