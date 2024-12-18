let Name = prompt("what is your name?");
let age = prompt("How old are you?");
let email = prompt("Your email");
  
if(age<12 ){
    alert(`Hi${Name}, you are ${age} years old and are too young to register.Sorry😔😔`)
} else if(age > 12 && age < 18){
    alert(`Hi ${usernmae}, you are ${age},years old and have limited option to register for.
        we will keep in touch via ${email},👋🏾👋🏾.`)
}else{
    alert(`Hi ${name},you are ${age}years old and you can register for any option of your chossing. we shall keep intouch
        via${email}👋🏾👋🏾.`)
}

