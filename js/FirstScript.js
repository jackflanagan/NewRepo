function squareFunction (p1){                   // square function
var square = p1 * p1;
    return square;
}

function AddingFunction (p1,p2,p3){             // adding function
var addition = p1 + p2 + p3;
    return addition;
}

var Person = {                                  // creation of object
    name: "Jack",
    age: 21,
    occupation: "Unemployed"
    
    
    
};



function increaseEvent() {                     // adding to age in object
    Person.age = Person.age+ 1;
    console.log(Person.age);
    
    document.getElementById("text").innerText = Person.age;
    
    
};

function printSentence(){                                                                               // printing Strings
    document.getElementById("sentence").innerText = " \"He Said \"My Name is elliot \"  \" " ; 
    
    }

function printCapsSentence(){
     
    var sen = " \"He Said \"My Name is elliot \"  \" ";
    document.getElementById("sentence1").innerHTML = sen.toUpperCase();
    
    }

function addingStringtoNumber(){                                                                   // adding string to number including conversion
    
    var numberv = 1;
    var string = Number("2");
    
    var ans = numberv + string;
    document.getElementById("sentence2").innerHTML = ans;
    
}

function createArray(){                                                  // Array functions 
    myList = ['oats','peas','beans'];
    document.getElementById("sentence3").innerHTML = myList;
    
}

function addingArrays(){
    myList.push('ketchup');
    document.getElementById("sentence3").innerHTML = myList;
    
}

function deleteArrays(element){
    
        var i = myList.indexOf(element);
    myList.splice(i,3);
    
    document.getElementById("sentence3").innerHTML = myList;
    
}


                                                                       // checking age function 
function checkAge() {
    if(Person.age > 20 && Person.age < 40){
       
        console.log("required age");
       } else{
           console.log("incorrect");
       }
}

function mapFunction(){
    var array1 = [1,2,3];
    array1 = array1.map(number => number * 10);
    console.log(array1);
}

function filterFunction(){

     var array1 = [1,0,3];
    array1 = array1.filter(number => number * 10);
    console.log(array1);

}

function fizzBuzz(){
var array2 = new Array(100);
for(var i =0; i<100; i++){
array2[i] = i + 1;
}
for(var i =0; i<array2.length; i++){
    var skip =0;
    if(i % 3 == 0){
        console.log('fizz');
        skip =1;
    }


    if(i % 5 == 0){
        console.log('buzz');
        skip =1;
    }
    if(!skip){
        console.log(i);
    }
}

}