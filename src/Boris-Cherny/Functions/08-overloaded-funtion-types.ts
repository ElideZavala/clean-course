
// shorthand call signature
type Log = (message: string, useId?: string) => void

// Full call signature
type Log2 = {
    (message: string, userId?: string): void
}

type Reservation = any

/* funciones de tipos multiples */
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from, to, destination) => {
    // console.log(from, to, destination);
    return {
        from,
        to,
        destination
    }
}

reserve(new Date, new Date, 'Usa');


/* manejo de Fechas */

// !No usar asi como any
function getMonth(date: any): number | undefined {
    if (date instanceof Date) {
        return date.getMonth();

    }
}

// *Usar como type Date, ya sera necesaria la validacion
function getMonth2(date: Date): number {
    return date.getMonth()
}

/* CreateElement */

type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: string): HTMLElement
}

let createElement: CreateElement = (tag: string): HTMLElement => {
    if (tag === 'a') {
        return document.createElement('a');
    }

    if (tag === 'canvas') {
        return document.createElement('canvas');
    }

    return document.createElement('tag');
}

function warnUser(warning) {
    if (warning.wasCalled) {
        return;
    }

    warnUser.wasCalled = true {
        alert(warning);
    }

    warnUser.warnUser = false;
}

type WarnUser = {
    (warning: object): void
    wasCalled: boolean
}

const warning = {
    wasCalled: 'tequiero'
}

let warnUser2: WarnUser = (warning) => {
    if (warning.wasCalled) {
        return;
    }

    warnUser.wasCalled = true {
        alert(warning);
    }

    warnUser.warnUser = false;
}