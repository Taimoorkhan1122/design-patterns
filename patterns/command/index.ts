/**
 * The Command interface declares a method for executing a command.
 */
interface Command {
    execute(): void;
}

// Receiver
export class OrderReceiver {
    private orders: string[] = [];

    createOrder(order: string, orderId: string) {
        this.orders.push(orderId);
        console.log(`Your order has been successfully places \norder: ${order} \nid: ${orderId} `);
    }

    cancelOrder(orderId: string) {
        const updatedOrders = this.orders.filter((o) => o !== orderId);
        console.log(`Your order has been cancelled!  id: ${orderId} `);
        this.orders.length = 0;
        this.orders.push(...updatedOrders);
    }

    trackOrder(orderId: string) {
        console.log(`Your order ${orderId} will arrive in 20 minutes.`);
    }
}

/* COMMANDS */

export class PlaceOrderCommand implements Command {
    private receiver: OrderReceiver;
    private order: string;
    private id: string;

    constructor(receiver: OrderReceiver, order: string, id: string) {
        this.receiver = receiver;
        this.order = order;
        this.id = id;
    }

    public execute(): void {
        this.receiver.createOrder(this.order, this.id);
    }
}

export class CancelOrderCommand implements Command {
    private receiver: OrderReceiver;
    private id: string;

    constructor(receiver: OrderReceiver, order: string, id: string) {
        this.receiver = receiver;
        this.id = id;
    }

    public execute(): void {
        this.receiver.cancelOrder(this.id);
    }
}

export class TrackOrderCommand implements Command {
    private receiver: OrderReceiver;
    private id: string;

    constructor(receiver: OrderReceiver, id: string) {
        this.receiver = receiver;
        this.id = id;
    }

    public execute(): void {
        this.receiver.trackOrder(this.id);
    }
}

export class OrderInvoker {
    private onStart: Command | null = null;
    private onEnd: Command | null = null;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnEnd(command: Command): void {
        this.onEnd = command;
    }

    public processOrder(): void {
        console.log("OrderInvoker: Starting order process...");
        if (this.onStart) {
            this.onStart.execute();
        }

        console.log("OrderInvoker: Processing order...");

        if (this.onEnd) {
            this.onEnd.execute();
        }
        console.log("OrderInvoker: Order process finished.");
    }
}

