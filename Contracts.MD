# BONDING CONTRACT

## Contracts deployed | Sepolia Network
Token Address: 0x3D61F5F32F334cF015d538c9A0e686D3b4fC249e
Asset to acquire token: 0x86b1741D99208F5A36C00bC1e9632e2179874038 
Treasury address: 0x7830D46E531e90705C50D6825418018f4887E24A
Vault address: 0x07D447B9605695A8fd0A20B5e526649f22545a2E

Calculator: 0xe83a9218dCc52C2e30439e4E874414D49e0a8001


BondDepo: 0xC96128899492242bF242404F09D03f7C0B3853Bb
EthBondDepo: 0xB8Cb680Dae260b71D1541104773E446900b566b7

Staking:
    Reward token: 0xe02EB22540AAA66537fFBdda804cf1A49334c94a
    Staking Contract: 0x87753332E5988107217f8CD0A30607C03BFC7192
    Distrbutor: 0x26DB0dB14Fd1b746Fc4f9f3752510eb4d9Cb984c
    Warmup: 0xc63F025DFe247a71625ba3F7Fa17584F7A315cD1
    Helper: 0xd6c89848F82976CB12ae44Df568D97b18011159e

## Contracts deploy order: 

0. Token address and principle asset.

1. Treasury is the first contract we deploy. This requires the 2 tokens that
    will be used for buying and acquiring.

2. Vault contract. Reason, is to set treasury as vault. 

3. TimeBondDepository contract.

4. BondingCalc contract (helper for the TimeBondDepo)

5. Staking contract. 
    5.1 The actual contract where tokens will be staked.
    5.2 Reward token will be next (Promises)
    5.3 Warmup contract
    5.4 Staking Helper contract.

6. Distributor contract.

