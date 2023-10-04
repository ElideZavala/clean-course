// new RequestBuilder()
//     .setURL('/users')
//     .setMethod('get')
//     .setData({ firstName: 'Anna' })
//     .send();

class RequestBuilder {
    private data: object | null = null;
    private url: string | null = null;
    private method: "get" | "post" | null = null;
    private isValidURL(url: string): boolean {
        // validate the URL here
        //regex for url validation

        return true;

        // return true if valid, false otherwise
    }
    setURL(url: string): this {
        if (!this.isValidURL(url)) {
            throw new Error("Invalid URL");
        }

        this.url = url;
        return this;
    }

    setMethod(method: "get" | "post"): this {
        if (method !== "get" && method !== "post") {
            throw new Error("Invalid method");
        }

        this.method = method;
        return this;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }

    send() {
        if (this.data && this.method && this.url) {
            // use observables
            axios({
                method: this.method,
                url: this.url,
                data: this.data,
            })
                .then((response: { data: any }) => console.log(response.data))
                .catch((err: any) => console.log(err));
        }
    }

    sendPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.data) {
                console.log(this.data);
            }

            if (this.method) {
                console.log(this.method);
            }

            if (this.url) {
                console.log(this.url);
            }

            setTimeout(() => {
                resolve("Response");
            }, 1000);
        });
    }
}
