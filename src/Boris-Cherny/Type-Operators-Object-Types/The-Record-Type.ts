export type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
export type Days = Weekdays | "Sat" | "Sun";

let nextDay: Record<Weekdays, Days> = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat",
};

console.log(nextDay.Mon); // Tue
