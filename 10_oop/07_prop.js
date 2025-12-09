class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const ronit = new User("Ronit")
// console.log(ronit.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const teach = new Teacher("iphone","i@phone.com")
console.log(teach.createId());

