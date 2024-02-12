import {assert} from "chai";
import {evenOrOdd} from "../Code/2.evenOrOdd/02.evenOrOdd.js";

describe("evenOrOdd", ()=> {
    it("test with non string value", ()=>{
assert.equal(evenOrOdd({prop: "Pesho"}), undefined, "return type must be undefined");
assert.equal(evenOrOdd(5), undefined, "return type must be undefined");
assert.isNotOk(evenOrOdd([]), "return type must be undefined");
    });
    
    it("test with valid string value", ()=>{
        assert.equal(evenOrOdd("pesho"), "odd", "result is correct (odd)");
        assert.equal(evenOrOdd("GOshoo"), "even", "result is correct (even");
    })
})
