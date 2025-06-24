// 3. **Task:** Define a discriminated union `Notification`:
    
//     ```tsx
//     type Notification = 
//       | { type: 'email'; to: string; subject: string; }
//       | { type: 'sms'; to: string; phone: string; }
//       | { type: 'push'; to: string; deviceId: string; };
//     ```
    
//     Write function `sendNotification(n: Notification): void` using `switch(n.type)`. For each case, log a message including all relevant fields.
    
//     Add an `assertNever(x: never): never` helper, and call it in `default:` to enforce exhaustive handling.


export type Notification = 
| { type: 'email'; to: string; subject: string; }
| { type: 'sms'; to: string; phone: string; }
| { type: 'push'; to: string; deviceId: string; };

function assertNever(x: never): never{
    throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

function sendNotification(n: Notification): void {
    switch(n.type){
        case "email":
            console.log(`sending email with subject ${n.subject} to ${n.to}`)
            break

        case "sms":
            console.log(`Sendind SMS to ${n.to} with phone nmber ${n.phone}`)
            break

        case "push":
            console.log(`Sending push notification to ${n.to} on device ${n.deviceId}`);
            break

        default:
            assertNever(n)
    }
}


const n1: Notification = { type: 'email', to: 'alice@example.com', subject: 'Hello!' };
const n2: Notification = { type: 'sms', to: 'Bob', phone: '+123456789' };

console.log(sendNotification(n1))