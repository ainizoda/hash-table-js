import { Hash } from "../src/index.js";

const fruitPrices = new Hash();

test("Set value using string type key", () => {
    fruitPrices.set("apple", 15);
    expect(fruitPrices.get("apple")).toBe(15);
});

test("Set value using number type key", () => {
    fruitPrices.set(12, "apple");
    expect(fruitPrices.get(12)).toBe("apple");
});

test("Set values only with string or number", () => {
    let key = new Promise(() => {});

    expect(() => {
        fruitPrices.set(key, 100);
    }).toThrow("Type of hash key cannot be 'promise'");

    key = new Date();

    expect(() => {
        fruitPrices.set(key, 100);
    }).toThrow("Type of hash key cannot be 'date'");
});

test("Two strings with a space in one of them must not be the same keys", () => {
    fruitPrices.set(" orange ", 18);
    fruitPrices.set("orange", 12);
    expect(fruitPrices.get(" orange ")).toBe(18);
    expect(fruitPrices.get("orange")).toBe(12);
});
