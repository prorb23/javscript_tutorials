class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

}

const ronit = new User("Ronit@ai","abc")
console.log(ronit.email);
console.log(ronit.password);
