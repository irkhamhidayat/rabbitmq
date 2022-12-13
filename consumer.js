const amqp = require('amqplib/callback_api');

// Step 1: Create Connection
amqp.connect('amqp://irkhamdayat:wkwk10hehe@159.223.81.109:5672', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create Channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue
        const QUEUE = 'tesrabbit'
        channel.assertQueue(QUEUE);
        // Step 4: Receive Messages
        channel.consume(QUEUE, (msg) => {
            console.log(`Message received: ${msg.content.toString()}`)
        })
    })
})