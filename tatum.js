require('dotenv').config()

const { generateAddressFromXPub, Currency, generatePrivateKeyFromMnemonic} = require('@tatumio/tatum');

const Tatum = require('@tatumio/tatum');

const xpub = process.env.TATUM_XPub 
const  mnemonic = process.env.TATUM_NMEMONIC
const testnets = process.env.TESTNET_TYPE



const wallet = async() =>{

const multiWallet = await Tatum.generateWallet(Tatum.Currency.ETH, true,testnets);

console.log(multiWallet);

}
//wallet()

//generate address

const generateAddress = async() =>{

    const address = await generateAddressFromXPub(
        Currency.ETH,
        true,
        xpub,
        1
    );
    console.log(address);
    //0xf02552be58c7c838f540cce8ac5018151810f525 has 10 eth rinkeby
    //addr

}
//generateAddress()


//Generate a private key
const privateKeyGenerate = async() =>{
    const privateKey = await generatePrivateKeyFromMnemonic(
        Currency.ETH, 
        true,
    testnets,
        1
    );
    console.log(privateKey)
    //walk alone culture gaze gospel opinion casual crucial history beach sport hip
    //0xe1676feb9f96972340056e42766381a2786ab624b2b25c01d9ceae21e13580ee
    }
    privateKeyGenerate()
    



