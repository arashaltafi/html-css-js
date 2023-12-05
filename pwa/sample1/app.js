const canvasElement = document.querySelector('.canvas');
const videoElement = document.querySelector('.video');
const takePhotoElement = document.querySelector('.take-photo');
const p = document.querySelector('.p');
const geolocation = document.querySelector('.geolocation');

const getMediaPermission = () => {
    if ('getUserMedia' in navigator) {
        navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(stream => {
            videoElement.srcObject = stream;
        }).catch(err => {
            console.log('stream error', err);
        })
    } else {
        console.log("Your Browser Don't Support Media");
    }
}

const takePhoto = () => {
    const context = canvasElement.getContext('2d');
    canvasElement.style.display = 'block';
    videoElement.style.display = 'none'
    takePhotoElement.style.display = 'none'
    context.drawImage(videoElement, 0, 0, canvasElement.width, 525);
    videoElement.srcObject.getVideoTracks().forEach(track => {
        console.log('track => ', track);
        track.stop();
    });
}

window.addEventListener('load', async () => {
    const hasAccessVideoDevice = await hasVideoDevice()
    if (hasAccessVideoDevice) {
        getMediaPermission()
    }
})

takePhotoElement.addEventListener('click', () => {
    takePhoto()
})

const hasVideoDevice = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    let hasDevice = false;
    devices.forEach(device => {
        if (device.kind === 'videoinput') {
            hasDevice = true
        }
    })
    console.log("devices", devices);
    return hasDevice
}

geolocation.addEventListener('click', () => {
    getLocation()
})

const getLocation = () => {
    if ('geolocation' in navigator) {
        var options = { timeout: 4000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack, options);
    }
}

const geoSuccessCallBack = (position) => {
    console.log('user location ', position);
    console.log("longitude ", position.coords.longitude);
    console.log("latitude ", position.coords.latitude);
    p.innerHTML = `longitude: ${position.coords.longitude} \n latitude: ${position.coords.latitude}`
}

const geoErrorCallBack = (err) => {
    console.log('location error ', err);
    switch (err.code) {
        case 0: {
            console.log('unknown error !!!');
            p.innerHTML = 'unknown error !!!'
            break;
        }
        case 1: {
            console.log('user denied Geolocation !!!');
            p.innerHTML = 'user denied Geolocation !!!'
            break;
        }
        case 2: {
            console.log('position not found !!!');
            p.innerHTML = 'position not found !!!'
            break;
        }
        case 3: {
            console.log('timeout !!!');
            p.innerHTML = 'timeout !!!'
            break;
        }
    }
}