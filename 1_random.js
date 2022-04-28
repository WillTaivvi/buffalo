const { ethers } = require("ethers");

const ALCHEMY_ID = 'hFr40-a80aQKlIsb5Jr0SGTjgb_xJhZx'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_ID}`)

const main = async () => {
    const wallet = ethers.Wallet.createRandom()
    console.log('address:', wallet.address)
    console.log('mnemonic:', wallet.mnemonic.phrase)
    console.log('privateKey:', wallet.privateKey)
}

main()
