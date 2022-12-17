const { tracer } = require("hardhat");

const aavePoolAddress = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
const wavaxAddress = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";

describe("TracerBreaker", function () {
  let tracerBreaker;

  it("deploys contract", async () => {
    const TracerBreaker = await ethers.getContractFactory("TracerBreaker");
    tracerBreaker = await TracerBreaker.deploy();
  });

  it("performs break", async () => {
    const amount = "100000000000000000000";
    tracer.enabled = true;
    await tracerBreaker.breaker(
      aavePoolAddress,
      wavaxAddress,
      amount,
      30,
      {
        value: amount,
      }
    );
    tracer.enabled = false;
  });
});
