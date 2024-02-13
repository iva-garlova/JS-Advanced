class Hex {
    constructor(value) {
        this.value = value;
    }
    toString(){
        return "0x" + this.value.toString(16).toUpperCase()
    }
    valueOf(){
        return this.value
    }
    plus(){
        
    }


}