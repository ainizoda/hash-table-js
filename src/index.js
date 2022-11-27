export class Hash {
    hash_memory = [];
    #_keys = [];

    #_hash(key) {
        if (typeof key === "number") {
            key = key.toString();
        }
        if (typeof key !== "string") {
            throw new Error(
                "Type of hash key cannot be '" +
                    key.constructor.name.toLowerCase() +
                    "'"
            );
        }
        let _h = 0;
        for (let c = 0; c < key.length; c++) {
            _h += key.charCodeAt(c) * (c + 1);
        }
        return _h;
    }

    get(key) {
        key = this.#_hash(key);
        return this.hash_memory[key];
    }

    set(key, value) {
        this.#_keys.push(key);
        key = this.#_hash(key);
        return (this.hash_memory[key] = value);
    }

    remove(key) {
        if (!this.#_keys.includes(key)) {
            return false;
        }
        key = this.#_hash(key);
        this.#_keys = this.#_keys.filter((ck) => ck !== key);
        delete this.hash_memory[key];
        return true;
    }

    keys() {
        return this.#_keys;
    }
}
