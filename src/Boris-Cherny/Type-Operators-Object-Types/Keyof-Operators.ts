import { APIResponse, resposeApi } from "./Keying-in-operator";

type ResponseKeys = keyof APIResponse; // 'user'
type UserKeys = keyof APIResponse["user"]; // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse["user"]["friendList"]; // 'count' | 'friends'

function get<
    O extends object, // Va a tomar un objeto
    K extends keyof O // Va a tomar una llave de ese objeto
>(
    o: O, // Va a tomar un objeto
    k: K // Va a tomar una llave de ese objeto
): O[K] {
    return o[k];
}

// ----------------------------------------------
type ActivityLog = {
    lastEvent: Date;
    events: {
        id: string;
        timestamp: Date;
        type: "Read" | "Write";
    }[];
};

let activityLog: ActivityLog = {
    lastEvent: new Date(),
    events: [
        {
            id: "123",
            timestamp: new Date(),
            type: "Read",
        },
        {
            id: "123",
            timestamp: new Date(),
            type: "Write",
        },
    ],
};

// Va a tomar un objeto y una llave de ese objeto
let lastEvent = get(activityLog, "lastEvent");

console.log(lastEvent);

//----------------------------------------------
/* Nuevo Get, que puede llegar a aceptar hasta 3 claves */
type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
    <
        O extends object, // Va a tomar un objeto
        K1 extends keyof O, // Va a tomar una llave de ese objeto
        K2 extends keyof O[K1] // Va a tomar una llave de ese objeto que esta dentro de la llave anterior
    >(
        o: O,
        k1: K1,
        k2: K2
    ): O[K1][K2];
    <
        O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1], // Va a tomar una llave de ese objeto que esta dentro de la llave anterior
        K3 extends keyof O[K1][K2] // Va a tomar una llave de ese objeto que esta dentro de la llave anterior
    >(
        o: O,
        k1: K1,
        k2: K2,
        k3: K3
    ): O[K1][K2][K3]; // Retorna el valor de la llave
};

let get2: Get = (object: any, ...keys: string[]) => {
    let result = object;
    keys.forEach((k) => (result = result[k]));
    return result;
};

// nombre del objeto, nombre de la llave, indice de la llave, nombre de la llave
let res = get2(activityLog, "events", 0, "type");
console.log(res);
let responseApi = get2(resposeApi, "user", "friendList", "friends");
let user = get2(resposeApi, "user");
console.log(responseApi);
