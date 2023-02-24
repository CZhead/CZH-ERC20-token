/* global BigInt */

CZhead = artifacts.require("CZhead");
truffleAssert = require("truffle-assertions");

const oneToken = 1000000000000000000n
const oneThousandTokens = 1000000000000000000000n

contract("CZhead", (accounts) => {
    it("should mint 1000 tokens", async() => {
        const c = await CZhead.deployed();
        let txn = await c.mint(accounts[0], oneThousandTokens);
        assert.equal(await c.balanceOf(accounts[0]), oneThousandTokens, "mint not ok" );
        truffleAssert.eventEmitted(txn, "Transfer", {from: '0x0000000000000000000000000000000000000000', to: accounts[0]})
    })
})