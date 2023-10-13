import { Currency } from "./Currency";

// usamos Currency como un type
let amountDue: Currency = {
    unit: "JPY",
    value: 83733.1,
};
console.log(amountDue);

// usamos Currency como un value
let otherAmountDue = Currency.from(330, "EUR");
console.log(otherAmountDue);
