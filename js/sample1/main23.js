//getter and setter

const person = {
    name: "arash",
    lastName: "altafi",
    get fullName() {
        console.log(`${this.name} ${this.lastName}`)
    },
    set fullName(value) {
        console.log(value)
        const parts = value.split(" ")
        this.name = parts[0]
        this.lastName = parts[1]
    }
};

//get
person.fullName


//set
person.fullName = "Arash Test"