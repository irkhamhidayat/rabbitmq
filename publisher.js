const amqp = require('amqplib/callback_api');

// Step 1: Create Connection
amqp.connect('amqp://157.245.51.160:5672', (connError, connection) => {
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
        // Step 4: Send message to queue
        channel.sendToQueue(QUEUE, Buffer.from('hello dari irkham'));
        console.log(`Message send ${QUEUE}`);
    })
})