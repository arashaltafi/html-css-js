const  { initializeApp } = require("firebase/app");
const  { getAnalytics } = require("firebase/analytics");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoVgN0b1c05EorOeY6sixCPH-YNgEyd6o",
    authDomain: "fir-notifications-b7b80.firebaseapp.com",
    projectId: "fir-notifications-b7b80",
    storageBucket: "fir-notifications-b7b80.appspot.com",
    messagingSenderId: "677260667482",
    appId: "1:677260667482:web:11f3a0d145d63ae6690663",
    measurementId: "G-GV6BY8R29R"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const messaging = firebase.messaging();

getUserToken();

function getUserToken() {
    var user = firebase.auth().currentUser;

    if (user) {
        user.getIdToken().then(function (token) {
            console.log("User Token:", token);
        }).catch(function (error) {
            console.error("Error getting user token:", error);
        });
    } else {
        console.log("No user signed in.");
    }
}

//get permission for notifications
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://arashaltafi.ir/arash.jpg',
    };

    if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                new Notification(notificationTitle, notificationOptions);
            } else {
                console.log('Notification permission denied.');
            }
        });
    }
});