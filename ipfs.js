const Tatum = require('@tatumio/tatum');
const  {ipfsUpload} = require( '@tatumio/tatum');
 require('dotenv').config()
// ipfsHash: 'bafkreigc7zfjynxbdcnqkc4gi4ztsvwjp7vbdoxj4wvtcbryjiqtr7ye2q'
 
const generatefcn = async() => {
   const ipfsc = await ipfsUpload('https://media-exp1.licdn.com/dms/image/D4E03AQHmglzhb92lVQ/profile-displayphoto-shrink_400_400/0/1642164767360?e=1651104000&v=beta&t=UcGlmlRas76uDXpTpu8RIaosk2OCOaJqfGfjjJPV3U8','cloudimage')
   console.log(ipfsc) 
}
 
generatefcn()
