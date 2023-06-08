import { Color } from './enum'


/* with readonly */
// Al hacer readonly ya no podrian ser modificadas. 
let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
let three = bs[2]
const elements: number[] = [5, 6, 7, 8]
let ze: readonly number[] = bs.concat(elements);
ze.concat(10) // no sera permitido
// as.push(6)

// whiout readonly
// let as: number[] = [1, 2, 3];
// let bs: number[] = as.concat(4)
// let three = bs[2]
// as[4] = 5
// as.push(6)

// console.log(as);
// console.log(bs);
// console.log(three);
// console.log(ze);

const blue = Color.Blue;
console.log(blue);