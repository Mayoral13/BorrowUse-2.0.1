const Borrow = artifacts.require("BorrowandUse");
module.exports = async function (deployer) {
  await deployer.deploy(Borrow);
 
  
};
