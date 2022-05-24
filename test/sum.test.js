var assert = require('assert');

const { sum, mul, sub } = require("../sum.js");



describe('testing sum function', () => {


    it("Should add two numbers", () => {

        assert.equal(sum(1, 2), 3);
    });
    it("Should multiply two numbers", () => {

        assert.equal(mul(2, 2), 4);
    });




})