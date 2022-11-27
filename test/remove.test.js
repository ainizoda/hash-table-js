import { Hash } from "../src/index.js";

const fruitPrices = new Hash();

test("Remove value from hash", () => {
    fruitPrices.set('cherry', 50);
    expect(fruitPrices.get('cherry')).toBe(50);
    fruitPrices.remove('cherry');
    expect(fruitPrices.get('cherry')).toBeUndefined();
});
