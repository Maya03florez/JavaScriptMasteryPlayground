function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomArray = [];

// Generate 20 random numbers in the range of 501 to 601
for (let i = 0; i < 20; i++) {
    randomArray.push(getRandomNumber(501, 601));
}

// console.log(randomArray);

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

const randomNumber = () => console.info(Math.round((Math.random() * 100) + 500));
randomNumber();