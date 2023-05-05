const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json')
const WETH = new web3.eth.Contract(IERC20.abi, '')

const UNLOCKED_ACCOUNT = ''

module.exports = async function (callback) {
    const [deployer, sniper] = await web3.eth.getAccounts()

    const amount = web3.utils.toWei('10', 'ether')

    await WETH.methods.transfer(deployer, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(sniper, amount).send({ from: UNLOCKED_ACCOUNT })

    const deployerBalance = await WETH.methods.balanceOf(deployer).call()
    console.log(`WETH amount in deployer: ${deployerBalance / 1e18}\n`)

    const sniperBalance = await WETH.methods.balanceOf(sniper).call()
    console.log(`WETH amount in sniper: ${sniperBalance / 1e18}\n`)

    callback()
}