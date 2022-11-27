let k = 1;

fetch ("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
// .then((json) => console.log(json))
.then((json) => {
  for (let i of json) {
    let title = `${i.title}`;
    let p = document.createElement("p");
    p.innerHTML = `This is Title ${k}: ${title}`;
    document.querySelector("body").appendChild(p);
    // console.log(title);
    k++;
  }
})
.catch((err) => {
  console.error("error", error);
});

// let OK_To_Run = true;

// let process = (time, cb) => {
//   return new Promise((resolve, reject) => {
//     if (OK_To_Run) {
//       setTimeout(() => {
//         resolve(cb());
//       }, time);
//     } else {
//       reject(console.log("try again later"))
//     }
//   });
// };

// process(0, () => console.log("Start"))
// .then(() => {return process(500, () => console.log("step1"))})
// .then(() => {return process(1000, () => console.log("step2"))})
// .then(() => {return process(1000, () => console.log("step3"))})
// .then(() => {return process(1000, () => console.log("step4"))})
// .then(() => {return process(1000, () => console.log("step5"))})
// .then(() => {return process(1000, () => console.log("Finished"))})
// .catch(() => {console.log("An error has occurred!")});


// let time = (ms) => {
//   return new Promise((resolve, reject) => {
//     if (OK_To_Run) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("try again later"));
//     }
//   });
// };

// const process = async () => {
//   try {
//     await time(0);
//     console.log("Start");

//     await time(500);
//     console.log("step1");

//     await time(1000);
//     console.log("step2");

//     await time(1000);
//     console.log("step3");

//     await time(1000);
//     console.log("step4");

//     await time(1000);
//     console.log("step5");

//     await time(1000);
//     console.log("Finished");
//   } catch (error) {
//     console.log("An error has occurred!")
//   }
// }

// process();