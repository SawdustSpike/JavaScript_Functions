console.log("Hello World!\n==========\n");
function printOdds(count){
for(let i = 1; i<= count; i++ )
{
    if(count<0){
        console.log("I dont deal in negative numbers, jack!");
        break;
    }
    else if(i%2==1){
        console.log(i);
    }
    else{
        continue;
    }
}
}
function checkAge(userNAme, age)
{
    let leftToGo = (16-age);
    if(age>=16){
        console.log(`Congrats ${userNAme}, you can drive!`);
    }
    else{
        console.log(`Sorry ${userNAme}, but you still have ${leftToGo} years left to go.`);
    }
}
function whichQuadrant(x,y)
{
    if(x==0 && y==0){
        console.log("You're right on the middle, baby!");
    }
    else if(x==0){
        console.log(`(${x},${y}) is on the y axis`);
    }
    else if(y==0){
        console.log(`(${x},${y}) is on the x axis`);
    }
    else if(x>0 && y> 0){
        console.log(`(${x},${y}) is in Quadrant 1`);
    }
    else if(x<0 && y> 0){
        console.log(`(${x},${y}) is in Quadrant 2`)
    }
    else if(x< 0 && y<0){
        console.log(`(${x},${y}) is in Quadrant 3`)
    }
    else{
        console.log(`(${x},${y}) is in Quadrant 4`)
    }
}
function isValidTriangle(a,b,c){
    if(a+b>c==false || a+c>b ==false || b+c>a ==false){
        return false;
    }
    else{
        return true;
    }    
}
function isTriangle(a,b,c){
    let isValid = isValidTriangle(a,b,c);
    if(isValid == false){
        console.log("MAAAAAAN that aint no triangle.")
    }
    else if(a==b && b==c){
        console.log("ya, mama! you got an equilateral")
    }
    else if(a==b || b==c || c==a){
        console.log("That's an Isosceles")
    }
    else{
        console.log("You got a scalene my dude.")
    }
}
let myNAme = "Mike";
let myAge = 18;
checkAge(myNAme, myAge);
printOdds(32);
printOdds(-3);
whichQuadrant(0,0);
whichQuadrant(0,2);
whichQuadrant(-10,3);
isTriangle(3,3,3);
isTriangle(3,3,1);
isTriangle(2,3,4);
isTriangle(100,2,2);





// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
