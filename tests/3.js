const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const getAsync = async () => {
    console.log('Старт');

    await sleep(2000);

    console.log('Проснулся');
};

console.log(1);
getAsync();
console.log(2);