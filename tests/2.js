console.log('start');

setTimeout(() => {
    console.log('timeout 1');
}, 0);

setTimeout(() => {
    console.log('timeout 2');
}, 0);

const promiseFunc = () => {
    return new Promise((resolve) => {
        resolve();
    })
}

promiseFunc()
    .then(() => {
        console.log('promise');
    })

console.log('end');