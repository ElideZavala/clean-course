// Type definitions for Currency
export type Currency = {
    unit: "EUR" | "GBP" | "JPY" | "USD";
    value: number;
};

// Companion object for Currency
export let Currency: any = {
    DEFAULT: "USD",
    from(value: number, unit = Currency.DEFAULT): Currency {
        return { unit, value };
    },
};

console.log(Currency.from(20));
