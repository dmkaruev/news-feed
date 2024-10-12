const loadImage = (src, callback) => {
    return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.src = src;
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (error) => {
            reject(error);
        };
    });
};

const go = async () => {
    try {
        const image1 = await loadImage('//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300');
        document.body.appendChild(image1);

        const image2 = await loadImage('//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300');
        document.body.appendChild(image2);

        const image3 = await loadImage('//avatars.mdsyandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300');
        document.body.appendChild(image3);

        const image4 = await loadImage('//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300');
        document.body.appendChild(image4);

        const image5 = await loadImage('//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300');
        document.body.appendChild(image5);
    } catch (error) {
        console.log(error);
    }
};

go();