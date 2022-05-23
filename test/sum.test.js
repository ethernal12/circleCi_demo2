var assert = require('assert');

const sum = require("../sum.js");


describe('testing sum function', () => { 


    it("Should add two numbers", () => {

        assert.equal(sum(1,2),3);
    });
    it("Should NOT add two numbers", () => {

        assert.equal(sum(1,2),4);
    });
    it("Should NOT add two numbers too", () => {

        assert.equal(sum(1,2),5);
    });
    

 })