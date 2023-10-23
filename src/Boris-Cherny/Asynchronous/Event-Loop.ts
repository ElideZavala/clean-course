setTimeout(() => console.log("A"), 1);
setTimeout(() => console.log("B"), 2);
console.log("C");

function readFile(
    path: string,
    options: { encoding: string; flag?: string },
    callback: (err: Error | null, data: string | null) => void
): void {
    // MEJORAR
}

function appendFile: (
    path: string,
    callback: (err: Error | null) => void 
) => {}

const fs = {
    readFile: readFile,
    
};

fs.readFile(
    "/var/log/apache2/access.log",
    { encoding: "utf-8" },
    (error, data) => {
        if (error) {
            console.error("error reading!", error);
            return;
        }
        console.log("success reading!", data);
    }
);


fs.appendFile(
    "/var/log/apache2/access.log",
    error => {
        if (error) {
            console.error("error reading!", error);
        }
    }
)