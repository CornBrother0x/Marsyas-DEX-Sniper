
`$ npm install`
```
ganache-cli -f wss://eth-mainnet.alchemyapi.io/v2/<Your-App-Key> -m <Your-Mnemonic-Phrase> -u 0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3 -p 7545
```
ganache-cli -f wss://eth-mainnet.alchemyapi.io/v2/<Your-App-Key> -u 0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3 -p 7545
```
`$ node ./bot.js`



In a seperate terminal:
`$ truffle migrate --reset`

`$ truffle exec ./scripts/1_fund.js`

`$ truffle exec ./scripts/2_create_pool.js`
