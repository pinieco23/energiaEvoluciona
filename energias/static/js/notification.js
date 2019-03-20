var urlMain;

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtbsuyv0iABVsGmb55vxKnzeSTqbrksQI",
    authDomain: "webpushnotification-226214.firebaseapp.com",
    databaseURL: "https://webpushnotification-226214.firebaseio.com",
    projectId: "webpushnotification-226214",
    storageBucket: "webpushnotification-226214.appspot.com",
    messagingSenderId: "536732300074"
  };
  firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BOpX56bTpBEU0Ji8AYxsFy2jXTDNLRFx9S4CdOeLmOoLG9LGvLiOgiCCONUpL8jJhxjVY9vRJedj_dTTylFTKt4");

messaging.requestPermission().then(async function() {
  console.log('Notification permission granted.');
  return await messaging.getToken();
})
.then(async function (token) {
  var urlDomain = window.location.host;
  sendSubscriptionToServer(token, urlDomain)
})
.catch(async function(err) {
  console.log('Unable to get permission to notify.', err);
});

messaging.onMessage(function (payload) {
  const title = payload.notification.title
  const options = {
    body: payload.notification.body,
    click_action: payload.notification.click_action,
  }
  var notif = new Notification(title, options);
})


// send subscription id to server
function sendSubscriptionToServer(token, urlDomain) {
  var myInit = {
    method: 'GET'
  }
  fetch(
   "https://inbound.1a1.click/api/insertFCM/" + token +"/"+ urlDomain,
    myInit
  ).then(async function (response) {
    var data = await response.json()
    return data
  });
}
