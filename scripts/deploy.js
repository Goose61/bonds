const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying TRUSTERC20Token with account:", deployer.address);

  const TRUSTERC20Token = await ethers.getContractFactory("TRUSTERC20Token");
  const token = await TRUSTERC20Token.deploy();
  await token.waitForDeployment();

  console.log("TRUSTERC20Token deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
