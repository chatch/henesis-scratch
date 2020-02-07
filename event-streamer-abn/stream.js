const { EventStreamer } = require('@haechi-labs/henesis-sdk-js')
const config = require('./config.json')

const eventStreamer = new EventStreamer(config.clientId)

const main = async () => {
  const subscription = await eventStreamer.subscribe(
    "streamedBlock",
    {
      integrationId: config.integrationId,
      subscriptionId: config.subscriptionId,
      ackTimeout: 30 * 1000 // optional. (default: 10000, unit: ms)
    }
  );

  subscription.on('message', async (message) => {
    const events = message.data;
    console.log(`event: ${JSON.stringify(events, null, 2)}`)
    message.ack();
  });

  subscription.on('error', err => {
    console.error(err);
  });

  subscription.on('close', err => {
    console.error(err);
  });
}

main()