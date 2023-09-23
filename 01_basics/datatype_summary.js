// primitive datatype (stack memory) and non-primitive datatype (heap memory)

let namee = "atul"

let another_name = namee
another_name = "ankit"

console.log(another_name);
console.log(namee);

// ......................................
// Example of non-primitve datatypes takes heap memory

let userOne = {
    userEmail : "atul@google.com",
    upi : "123@sbi"
}

let userTwo = userOne

userTwo.userEmail = "techie@google.com"

console.log(userOne.userEmail)
console.log(userTwo.userEmail);