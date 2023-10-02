/* Uso de MyMap */
import { MyMap } from "./part-1";

let as = new MyMap<string, number>("k2", 2);
let ds = new MyMap("k", true);

console.log(as.get("k"));
