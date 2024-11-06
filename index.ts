import { TrackOrderCommand,CancelOrderCommand,OrderInvoker,OrderReceiver,PlaceOrderCommand } from './patterns/command/index';
const order = "thai curry"
const id = '10';

const invoker = new OrderInvoker();
const receiver = new OrderReceiver();

invoker.setOnStart(new PlaceOrderCommand(receiver, 'Thai curry', '12'))
invoker.setOnEnd(new TrackOrderCommand(receiver, '12'));

invoker.processOrder();