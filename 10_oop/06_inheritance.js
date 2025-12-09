class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teach = new Teacher("Teach1","Teach@google.com","1234")

teach.addCourse()

const newUser = new User("RBslayer")
newUser.logMe()

teach.logMe()