This project demonstrates streaming events with Henesis. Specifically for events emitted by contract functions called through an OpenZeppelin proxy.

This mechanism is described here: https://docs.henesis.io/event-streamer/faq/can-the-henesis-also-subscribe-to-event-data-for-delegatecall

Follow these steps to stream an event:

* Put a flattened version of the implementation contract in contracts/. Run 'truffle-flattener' or similar tool from the smart contract project folder.
* Copy config.json.example to config.json and set your Henesis clientId in config.json
* Update henesis.yaml with the address of the proxy contract and the name of the implementation contract that emits the event(s)
* Run henesis integration:deploy
* Set the integrationId in config.json (run 'henesis integration:status' to see the integration id)
* Start the event streamer
```
node stream.js
```
* Broadcast a transaction that triggers the contract function and event
