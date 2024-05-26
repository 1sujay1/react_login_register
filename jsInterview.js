//Question:
/*
let i;
for (i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 2);
}
*/
//5 5 5 5 5

let i;
for (i = 0; i < 5; i++) {
  function a(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 2);
  }
  a(i);
}
