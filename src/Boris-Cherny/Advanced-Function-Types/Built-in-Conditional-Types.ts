// Exclude<T, U>
type AC = number | string;
type BC = string;
type CC = Exclude<AC, BC>; // number

// Extract<T, U>
type AD = number | string;
type BD = string;
type CD = Extract<AD, BD>; // string

// NonNullable<T>
type AE = { a?: number | null };
type BE = NonNullable<AE["a"]>; // number

// ReturnType<T>
type AF = (a: number) => string;
type BF = ReturnType<AF>; // string

// InstanceType<T>
type AG = { new (): BG };
type BG = { b: number };
type CG = InstanceType<AG>; // { b: number }
