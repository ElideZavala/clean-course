class MessageQueue {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
        return new MessageQueue(messages);
    }
}

// static funciona como un constructor, pero no se puede llamar con new
// static es una forma de simular clases finales, ya que no se puede extender

// class BadQueue extends MessageQueue {}

const message = MessageQueue.create([]); // OK
console.log(message);
