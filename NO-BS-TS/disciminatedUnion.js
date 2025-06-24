"use strict";
// 3. **Task:** Define a discriminated union `Notification`:
Object.defineProperty(exports, "__esModule", { value: true });
function assertNever(x) {
    throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}
function sendNotification(n) {
    switch (n.type) {
        case "email":
            console.log(`sending email with subject ${n.subject} to ${n.to}`);
            break;
        case "sms":
            console.log(`Sendind SMS to ${n.to} with phone nmber ${n.phone}`);
            break;
        case "push":
            console.log(`Sending push notification to ${n.to} on device ${n.deviceId}`);
            break;
        default:
            assertNever(n);
    }
}
const n1 = { type: 'email', to: 'alice@example.com', subject: 'Hello!' };
const n2 = { type: 'sms', to: 'Bob', phone: '+123456789' };
console.log(sendNotification(n1));
