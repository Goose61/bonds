const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying uTrustStableToken with account:", await deployer.getAddress());

  const uTrustStableToken = await ethers.getContractFactory("uTrustStableToken");
  const token = await uTrustStableToken.deploy();
  await token.waitForDeployment();

  console.log("uTrustStableToken deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
