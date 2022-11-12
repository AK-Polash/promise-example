/* =============================================================
                      Promise live example 
============================================================= */
let payment = true;
let marks = 80;
let clearence = true;

function enroll() {
  console.log("A");
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve("B");
      } else {
        reject("Payment Error");
      }
    }, 1000);
  });

  return myPromise;
}

function beginCourse() {
  console.log("C");
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 70 && marks <= 100) {
        resolve("D");
      } else {
        reject("Failed in Exam");
      }
    }, 1000);
  });

  return myPromise;
}

function getCertificate() {
  console.log("E");
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (clearence) {
        resolve("F");
      } else {
        reject("You don't have the Clearence");
      }
    }, 1000);
  });

  return myPromise;
}

// Consuming the Code:
enroll()
  .then((value) => {
    console.log(value);
  })
  .then(beginCourse)
  .then((value) => {
    console.log(value);
  })
  .then(getCertificate)
  .then((value) => {
    console.log(value);
  })
  .catch((message) => {
    console.log(message);
  });
