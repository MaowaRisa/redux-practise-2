const arr = ['Mezba'," Mizan", "Tanmoy" ];

arr.push('Firoz');

console.log(arr)

// function currying
const add = (a) =>{
    return (b) =>{
        return (c) =>{
            return a *( b + c);
        }
    }
}
// console.log(add(1)(1)(1)) // remember the previous ref
// game example a = game level, b = distance and c = time taken for distance 

const level = add(5); // level 1
 console.log(level(2)(6)); // 2 cm, 6m time // it remember the previous value 
 console.log(level(1)(3)); // 2 cm, 6m time
 console.log(level(5)(2)); // 2 cm, 6m time
