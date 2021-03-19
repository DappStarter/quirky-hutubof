require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'imitate prize frame street name reflect still modify give kite metal general'; 
let testAccounts = [
"0x8bf8a72087960705ed34034c6e0812581e8ed94855f8ed6fe15058c5f5c3dde0",
"0xcc2aa06614e32b0d94e4baaec0581abdd1215bc03d6fe295ede13f0840fca235",
"0x65bc28e7f19c5d972a59827e355ea3fef9542545bf2c4f2d55de4c6af9b50bc8",
"0x5cde34dd2c5bd13e732ae0ecaff165d89d30c2a43d5af4d1c21c8555d49b7bb4",
"0x409b428a4e8eb02a7e90eba9c184b6cf311223bb72268460124c7dfe4aa4e47a",
"0x5181e961ba70f17cd54b888f988b2a20306839bbc8e25e884a473606409b4b15",
"0x66c0f47880e02c22443bcee70abd3c3601c52c771f19469c623c532983dc8472",
"0x4627cc0ef1e4ea1e76b576ec50717ce983b7b4fc1340ba5c86ba139b521c7c50",
"0x6cffd20c3d7f0facdc8fcae039c87973d37e28d04eeb3395916db953409e0b87",
"0x97504543a6cad6bd58915593724aca474e23abce1f38819cf01913b515a08f14"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

