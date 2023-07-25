// function RandomNumber(count) {
//   const RNumbers = [];
//   let Sum = 0;
//   let mindelay = 500;
//   let maxdelay = 10000;

//   const genRandomNumber = () => {
//     const Number = Math.floor(Math.random() * 100);

//     console.log('-->>', Number);

//     RNumbers.push(Number);
//     Sum += Number;
//     console.log('Total =>', Sum);
//   };
//   for (let i = 0; i < count; i++) {
//     const randomDelay = Math.floor(
//       Math.random() * maxdelay - mindelay + 1 + mindelay
//     );

//     setTimeout(() => genRandomNumber(i), randomDelay);
//   }
// }

// const count = 10;
// RandomNumber(count);



////////--------///////



// function generateRandomNumber() {
//   return new Promise((resolve) => {
//     const randomDelay = Math.floor(Math.random() * 1000 + 100);

//     setTimeout(() => {
//       const number = Math.floor(Math.random() * 100);
//       resolve(number)
      
//     }, randomDelay);
//   });
// }

// async function generateRandomNumberArray(count) {
//   const arr = [];

//   for (let i = 0; i < count; i++) {
//     arr.push(generateRandomNumber());
//   }

//   return Promise.all(arr);
// }

//  async function sum(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

//  async function RandomNumber(){
//   try {
//           const number = await generateRandomNumberArray(10)
//           console.log(sum(number));
//   } catch (error) {
//           console.log(error);
//   }
//  }
//  RandomNumber()

function CompareTwoObject(obj1,obj2){
  let value1 =  Object.keys(obj1) 
  let value2 =  Object.keys(obj2)
  
if(value1.length !== value2.length){
  
  return false
}
for(let key of value1){
  console.log(obj1[key]);
  console.log(obj2[key]);

  const val1 = obj1[key]
  const val2 = obj2[key]

  if(typeof val1 === "object" && typeof val2 ==="object"){
      if(!CompareTwoObject(val1,val2)){
          return false
      }
  }
      else if (val1 !== val2){
       return false
  }

}
return true
}
let obj1 ={Name:"Harsh",Age:25,address:{State:"Haryana",Country:"India"}} 
let obj2 ={Name:"John",Age:40,address:{State:"New York",Country:"USA"}} 

console.log(CompareTwoObject(obj1,obj2));







// arr1 , arr2


function CompareTwoArray(arr1,arr2){
if(arr1.length !==arr2.length)
return false

for(let i = 0;i<arr1.length;i++ ){
  console.log(arr1[i]);
  console.log(arr2[i]);

  if(arr1[i] !== arr2[i]){
      return false
  }
}
return true
}
// let arr1 = [10,20,30,40,50,60,70,80,90,100]
// let arr2 = [10,20,30,40,50,60,70,80,90,100]

let arr1 = [10,20,30,40,50]
let arr2 = [60,70,80,90,100]
console.log(CompareTwoArray(arr1,arr2));





