/* task01 
function checkELeapYear (year){
    if(year%4 == 0 && year%100==0 ){
        return true;
    }
    else if(year%400==0){
        return true;
    }
    else{
        return false;
    }
}
let year = parseInt(prompt("Enter ther year"));
if(checkELeapYear(year)==true){
    document.write(year,"is a leap year");
}
else{
    document.write(year,"is not a leap year");
}


/*task 02 
  function checkTicketPrice (age){
    if(age===12){
        return 10
    }
    if (age===13 <=17 ){
        return 15
    }
    if (age===18){
        return 20
    }
    
  }
 let age= parseInt(prompt("Enter ur age"));
 
 /*task 01 Recursion*/
  function fib(n){
    if(n < 3) return 0;
    return fib(n-1) + fib(n-2);
  }
  
  console.log(fib(5))