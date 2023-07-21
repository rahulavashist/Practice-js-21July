function RandomNumber(count) {
  const RNumbers = [];
  let Sum = 0;
  let mindelay = 500;
  let maxdelay = 10000;

  const genRandomNumber = () => {
    const Number = Math.floor(Math.random() * 100);

    console.log('-->>', Number);

    RNumbers.push(Number);
    Sum += Number;
    console.log('Total =>', Sum);
  };
  for (let i = 0; i < count; i++) {
    const randomDelay = Math.floor(
      Math.random() * maxdelay - mindelay + 1 + mindelay
    );

    setTimeout(() => genRandomNumber(i), randomDelay);
  }
}

const count = 10;
RandomNumber(count);
