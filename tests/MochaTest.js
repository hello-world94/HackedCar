/**
 * Created by Alex on 12/3/2015.
 */
var assert = require("chai").assert;
var should = require("chai").should();

describe("Test Mocha", function ()
{
    it("should pass", function ()
    {
       assert(true);
    });
    it("should fail",function(){
        (true).should.not.equal(false);
    });
});