//завдання 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//завдання 2
let arr = [1, 2, 3, 4, 5];
console.log(arr);
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

//завдання 3
let arr2 = [-1, 22, 3, 44, 5];
let maxNum = arr2[0];
for (let j2 = 0; j2 < arr2.length; j2++) {
  if (arr2[j2] > maxNum) {
    maxNum = arr2[j2];
  }
}
console.log(`max numb is ${maxNum}`);

//завдання 4
let rndNum = [];
let Nul = 0;
let Plus = 0;
let Minus = 0;
for (let i = 0; i < 8; i++) {
  rndNum[1] = +prompt("напишіть число");
  console.log(`кількість чисел ${rndNum}`);
  if (rndNum[1] > 0) {
    Plus++;
  }
  if (rndNum[1] === 0) {
    Nul++;
  }
  if (rndNum[1] < 0) {
    Minus++;
  }
}
console.log(
  `ти написав ${Nul} нулів, ${Plus} додатніх, ${Minus} від'ємних чисел`
);

//завдання 5
let eight = 8;
for (let m = 1; m < 10; m++) {
  let sumTab = eight * m;
  console.log(sumTab);
}

//завдання 6
let arrForIf = [2, 5, 9, 15, 0, 4];
for (let f = 0; f < arrForIf.length; f++) {
  if (arrForIf[f] > 3 && arrForIf[f] < 10) {
    console.log(arrForIf[f]);
  }
}

//завдання 7
let calc;
do {
  let FirstNum = +prompt("введіть 1 число");
  let Sign = prompt("введіть дію");
  let SecondNum = +prompt("введіть 2 число");

  switch (Sign) {
    case "+":
      alert(`Результат: ${FirstNum + SecondNum}`);
      break;
    case "-":
      alert(`Результат: ${FirstNum - SecondNum}`);
      break;
    case "*":
      alert(`Результат: ${FirstNum * SecondNum}`);
      break;
    case "/":
      alert(`Результат: ${FirstNum / SecondNum}`);
      break;
    default:
      alert("щось пішло не так");
  }
  calc = confirm("продовжити користуватись?");
} while (calc === true);
