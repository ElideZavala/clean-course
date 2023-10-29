import Redis from "redis";
// interface Emitter {
//     // Send an event
//     emit(channel: string, value: unknown): void;

//     // Do something when an event is sent
//     on(channel: string, f: (value: unknown) => void): void;
// }

// type RedisClient = {
//     on(event: "ready", f: () => void): void;
//     on(event: "error", f: (e: Error) => void): void;
//     on(
//         event: "reconnecting",
//         f: (params: { attempt: number; delay: number }) => void
//     ): void;
// };

type Events = {
    ready: void;
    error: Error;
    reconnecting: { attempt: number; delay: number };
};

type RedisClient = {
    on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void;
};

// create a new instance of a Redis client
const redisClient: RedisClient = {
    on(event: "string", f: () => void) {
        // logica para el evento 'ready'
    },
    on(event: "error", f: (arg: Error) => void) {
        // logica para el evento 'error'
    },
    on(
        event: "reconnecting",
        f: (arg: { attempt: number; delay: number }) => void
    ) {
        // logica para el evento 'reconnecting '
    },
};

redisClient.on("ready", () => {
    console.log("Redis client ready");
});

redisClient.on("error", (e: Error) => {
    console.log("Redis client error", e);
});

redisClient.on("reconnecting", (info: { attempt: number; delay: number }) => {
    console.log(
        `Redis client reconnecting (attempt ${info.attempt}) in ${info.delay}ms`
    );
});
