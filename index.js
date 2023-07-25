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



function generateRandomNumber() {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 1000 + 100);

    setTimeout(() => {
      const number = Math.floor(Math.random() * 100);
      resolve(number)
      
    }, randomDelay);
  });
}

async function generateRandomNumberArray(count) {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(generateRandomNumber());
  }

  return Promise.all(arr);
}

 async function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

 async function RandomNumber(){
  try {
          const number = await generateRandomNumberArray(10)
          console.log(sum(number));
  } catch (error) {
          console.log(error);
  }
 }
 RandomNumber()

