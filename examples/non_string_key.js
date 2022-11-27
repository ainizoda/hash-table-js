import { Hash } from "../src/index.js";

const fruitPrices = new Hash();
const key = new Promise(() => {});

fruitPrices.set(key, 25);

console.log(fruitPrices.get(key)); // Error: Type of hash key cannot be 'promise'
