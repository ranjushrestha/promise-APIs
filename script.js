const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 fail"), 5000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 fail"), 2000);
});


Promise.all([p1, p2, p3])
.then((res) => {
    console.log[res];
})
.catch((err) => {
   console.error(err);
   console.log[err.error];
});


Promise.allSettled([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
   console.error(err);
   
});

Promise.race([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
   console.error(err);
   
});

Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
   console.error(err);
   console.log(err.errors)
});