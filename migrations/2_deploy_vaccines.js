const VaccineTracking = artifacts.require("VaccineTracking");

module.exports = function (deployer) {
  deployer.deploy(VaccineTracking);
};