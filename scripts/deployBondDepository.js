const { ethers } = require("hardhat");

// From Contracts.MD | Sepolia Network
const TIME_TOKEN = "0x3D61F5F32F334cF015d538c9A0e686D3b4fC249e"; // Token
const PRINCIPLE = "0x86b1741D99208F5A36C00bC1e9632e2179874038"; // Asset to acquire token
const TREASURY = "0x7830D46E531e90705C50D6825418018f4887E24A";
const DAO = "0x07D447B9605695A8fd0A20B5e526649f22545a2E"; // Vault address
const BOND_CALCULATOR = "0xe83a9218dCc52C2e30439e4E874414D49e0a8001"; // LP bond

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying TimeBondDepository with account:", await deployer.getAddress());

  const BondDepositoryFactory = await ethers.getContractFactory("TimeBondDepository");
  const bondDepository = await BondDepositoryFactory.deploy(
    TIME_TOKEN,
    PRINCIPLE,
    TREASURY,
    DAO,
    BOND_CALCULATOR
  );
  await bondDepository.waitForDeployment();

  console.log("TimeBondDepository deployed to:", await bondDepository.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
