// let myName = "Ronit    "
// let myId = "RBslayer    "
// console.log(myName.truelength);

let myHeros = ["Ro" , "Ko"]

let heroPower={
    Ro: "Pull",
    Ko: "Cover-Drive",

    getRoPower: function(){
        console.log(`Kohli power is ${this.ko}`);
    }
}

Object.prototype.Ronit = function(){
    console.log(`Ronit is present in all object`);
}

Array.prototype.heyRonit = function(){
    console.log(`Ronit says helo`);
}
// heroPower.Ronit()
//  myHeros.Ronit()

// heroPower.heyRonit();
 myHeros.heyRonit();

//  inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

const anotherUsername = "RBBoss   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"RBslayer   ".trueLength()
"Esponite".trueLength()


