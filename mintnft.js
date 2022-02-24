const Tatum = require('@tatumio/tatum');

const {Currency, mintNFTWithUri} =require( '@tatumio/tatum');
 
require('dotenv').config()



 
const generatefcn = async() => {
const transactionHash = await mintNFTWithUri(true, {
   to: '0xf02552be58c7c838f540cce8ac5018151810f525',
   url: 'ipfs://bafkreigc7zfjynxbdcnqkc4gi4ztsvwjp7vbdoxj4wvtcbryjiqtr7ye2q/metadatafile.json',
   tokenId: '100000',
   chain: Currency.ETH,
   feeCurrency: Currency.ETH,
   contractAddress: '0xf02552be58c7c838f540cce8ac5018151810f525',
   fromPrivateKey: '0xe1676feb9f96972340056e42766381a2786ab624b2b25c01d9ceae21e13580ee'
});
console.log(transactionHash)
}
 
generatefcn()
