console.log(" Hallo world")
let eisColor;
let user;
let userName;
userName = "Vasya";
user = userName;
console.log(user);
if (user === "Vasya"){
    console.log(")))");
}else {
    console.log("(((");
}
let a = 2;
let b = 5;
// оператор ?
let operator = 5 > 4 ? " vopros" :
5 < 4 ?  "otvet" : "net otveta"
console.log(operator);
//цикл for и while
/*let num = 0;
while (num < 3){
    console.log(`Число: ${num}`);
    num++;
};*/
/*firstFor : for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++){
        if (size == 2){
break firstFor;
        }
        console.log(size);
    }
    }
    function checkScope() {
        let i = 'function scope';
        if (i < i.length) {
              console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
      }

let cat = {};
cat.name = "viskas";
cat["age"] = 8;
console.log(Object.keys(cat));
let dog = {
    name : "dogi",
    "age" : 4,
};
console.log(cat.name);
console.log(cat["age"]);
console.log(dog.name);
console.log(dog["age"]);
console.log(Object.keys(dog));

function freezeObj() 

    const myConcat = (arr1, arr2) => arr1.concat(arr2);
    console.log(myConcat([1, 2], [3, 4, 5]));

    const increment = (number, value = 1) => number + value;
    
    function remove (string) {
        let str ;
        let i ;
                for ( i = string.length; i > 0 ; i--){
            str = string.slice(0, string.length -1);
            if (string[i] !== "!") break;
                };
   return str;
      };
      console.log(remove("Hi!!"));
*/
// task is complited
/*function fakeBin(x){
    x = x.split("");
        for (let i = 0; i < x.length; i++){
        if (Number(x[i]) >= 5){
            x[i] = "1";
        }else {
            x[i] = "0";
        };
    };
    x = x.join('');
    return x
}
let binNunber = fakeBin('454');
console.log(binNunber);
*/
let finalGrade = (exam, projects) => {
  return ( 
 exam > 90  || projects > 10 ? 100 :
 exam > 75 && projects >= 5 ? 90 :
 exam > 50 && projects >= 2 ? 75 : 0)
}
                                   

  console.log(finalGrade(76, 2));