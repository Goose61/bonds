const { ethers } = require("hardhat");

// Staking epoch config
const EPOCH_LENGTH = 60; // seconds (15 min)
const FIRST_EPOCH_NUMBER = 1;
const FIRST_EPOCH_TIME = 1789831860; // 2026-09-19 15:30 UTC

async function main() {
  const [deployer] = await ethers.getSigners();
//   console.log("Deploying Promises with account:", await deployer.getAddress());
//   const PromisesFactory = await ethers.getContractFactory("TrustStaking");
//   const promises = await PromisesFactory.deploy();
//   await promises.waitForDeployment();

//   console.log("Promises deployed to:", await promises.getAddress());

//   console.log("Deploying Trust token...");
//   const TrustFactory = await ethers.getContractFactory("TRUSTERC20Token");
//   const trust = await TrustFactory.deploy();
//   await trust.waitForDeployment();

//   console.log("Trust deployed to:", await trust.getAddress());

  console.log("Deploying Helper...");
  const warmupFactory = await ethers.getContractFactory("StakingHelper");
  const warmup = await warmupFactory.deploy(
    "0x87753332E5988107217f8CD0A30607C03BFC7192",
    "0x3D61F5F32F334cF015d538c9A0e686D3b4fC249e"
  );
  await warmup.waitForDeployment();

  console.log("Helper deployed to:", await warmup.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
