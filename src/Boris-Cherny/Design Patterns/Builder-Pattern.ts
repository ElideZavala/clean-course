// new RequestBuilder()
//     .setURL('/users')
//     .setMethod('get')
//     .setData({ firstName: 'Anna' })
//     .send();

class RequestBuilder {
    private data: object | null = null;
    private url: string | null = null;
    private method: "get" | "post" | null = null;

    setURL(url: string): this {
        this.url = url;
        return this;
    }

    setMethod(method: "get" | "post"): this {
        this.method = method;
        return this;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }

    send() {
        if (this.data) {
            console.log(this.data);
        }

        if (this.method) {
            console.log(this.method);
        }

        if (this.url) {
            console.log(this.url);
        }
    }
}
