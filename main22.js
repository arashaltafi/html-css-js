//check version

function getAndroidVersion() {
    const match = window.navigator.userAgent.match(/Android\s([0-9.]+)/);
    return match ? match[1] : undefined;
}

function getIOSVersion() {
    const match = window.navigator.userAgent.match(/OS\s([0-9_]+)/);
    return match ? match[1].replace('_', '.') : undefined;
}

function getChromeVersion() {
    const match = window.navigator.userAgent.match(/Chrome\/([0-9.]+)/);
    return match ? match[1] : undefined;
}

function checkVersions() {
    if (/Android/i.test(navigator.userAgent)) {
        const androidVersion = getAndroidVersion();
        console.log(`Android Version: ${androidVersion}`);
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const iOSVersion = getIOSVersion();
        console.log(`iOS Version: ${iOSVersion}`);
    }

    const chromeVersion = getChromeVersion();
    console.log(`Chrome Version: ${chromeVersion}`);
}

checkVersions();