console.log("Jack Ma's Advice");
const list = [
  "be a good student",
  "choose a good boss and make many mistakes",
  "start to work for yourslef",
  " do things that you are good at",
  "invest for young generation",
  "it is time to rest!",
];
// CALLBACK
// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");

// giveAdvice(66, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("result:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC Function
async function giveAdvice(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    // bu holatda promise bilan setinterval bir marta ishlaydi yana har bir biz kirtgan vatqda resultni olib kelmay faqat bir marta olib keladi
    // agarda biz shu holatda call back da yozganimizda qachonki result kelsa osha resultni biz kirtigan vaqtda olaverardi
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
  }
  //   setTimeout(() => {

  //   }, 5000);
}
// console.log("passed here 0");

// then cath orqali data yoki errowni qaytarish
// giveAdvice(66)
//   .then((data) => {
//     giveAdvice(30)
//       .then((data) => {
//         //  bu holatda bizga callback hell degan yoki promise hell degan narsalar paydo boladi yani noqulay bolib ketadi
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// call via Async va await
// bu bizga  callback helll oyki promise hell ni oldiin oladi
// async function run() {
//   let javob = await giveAdvice(65);
//   console.log(javob);
//   javob = await giveAdvice(30);
//   console.log(javob);
//   javob = await giveAdvice(45);
//   console.log(javob);
// }
// run();
// console.log("passed here 1");

// A TASK

function calculate(letter, text) {
  count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}

console.log(calculate("e", "engineer"));
