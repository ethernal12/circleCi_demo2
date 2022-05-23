var assert = require('assert');

const sum = require("../sum.js");
const mul = require("../sum.js");


describe('testing sum function', () => { 


    it("Should add two numbers", () => {

        assert.equal(sum(1,2),3);
    });
    it("Should multiply two numbers", () => {

        assert.equal(mul(2,2),4);
    });
    it("Should NOT multiply two numbers", () => {

        assert.equal(mul(2,2),5);
    });
    
   

 })