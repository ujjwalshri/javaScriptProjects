
// const user={
//     username:"ujjwal",
//     id:12,
//     greet: function greeting (){
//        console.log(this);
//     }
// }
// console.log(user.greet());


function User(username, loginCount, isLogged){
    this.username= username;
    this.loginCount=loginCount;
    this.isLogged=isLogged;
    return this
}

const user1 = new User('ujjwal',4,true);
const user2 = new User("anshikha", 5,false);
console.log(user1);
console.log(user2);