require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember undo hunt option flip genius'; 
let testAccounts = [
"0xa76c5a80cf76d80caa80a79ee137c4a59ba8ace1d13b828eb560d4f877105c87",
"0xb3a1fce50560800c03cdcfed0e75483b5546396de041e77c9bc72b067806935d",
"0xeb15c80566626f41963c3cd5345dfdf068ecbc0a75616ca6c402c99af41db414",
"0x6d2b6601427c1939000d1377a7e06abf59f2483975bc8df2e0f94cf3f2d9bbf7",
"0xa0355266b670f5daa43d7d265281bbbdb13e99ed29f72615163ee0d7bf9ce22e",
"0x22832c1b40022b84b746de4d38e6ef7bad0a0c5cd59be6350a3c502c6be90c71",
"0x7f9832c1efe845d7d749adfa2166ac3831b03543bd2798415ba06162a0582160",
"0x5ff6650afa382eb802730a1c06674253e0be7bbe60e3aab39b50f18bbcd0f003",
"0x42aec35b339956696c81869e8e407ef7ccd6457ed964c8b5d6fd9b8b135e0d75",
"0x072f2f1aabd03b6dcacc02e12e8f16726f2ecb543b89199a69137351effff532"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


