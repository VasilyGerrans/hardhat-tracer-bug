Steps for reproducing the bug:

1. Start a local node with `npx hardhat node`
2. Run the test on that node with `npx hardhat test --network forked`
3. Upon test completion, copy the local transaction hash and then run

`npx hardhat trace --rpc http://127.0.0.1:8545 --hash [tx hash]` fails with `Error: [hardhat-tracer]: Transaction not found on rpc. Are you sure the transaction is confirmed on this network?`

`npx hardhat trace --network forked --hash [tx hash]` fails with `TypeError: provider._init is not a function`
