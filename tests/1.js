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

loadImage(
    "//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300"
)
    .then((image) => {
        document.body.appendChild(image);
        return loadImage(
            "//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300"
        );
    })
    .then((image) => {
        document.body.appendChild(image);
        return loadImage(
            "//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300"
        );
    })
    .then((image) => {
        document.body.appendChild(image);
        return loadImage(
            "//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300"
        );
    })
    .then((image) => {
        document.body.appendChild(image);
        return loadImage(
            "//avatars.mds.yandex.net/get-mpic/1888674/2a00000191c6d8440974b74a07d10dfe4e07/300x300"
        );
    })
    .catch((error) => console.log(error));
