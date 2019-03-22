importScripts('https://www.gstatic.com/firebasejs/5.8.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.8.0/firebase-messaging.js')

var config = {
  apiKey: "AIzaSyAtbsuyv0iABVsGmb55vxKnzeSTqbrksQI",
  authDomain: "webpushnotification-226214.firebaseapp.com",
  databaseURL: "https://webpushnotification-226214.firebaseio.com",
  projectId: "webpushnotification-226214",
  storageBucket: "webpushnotification-226214.appspot.com",
  messagingSenderId: "536732300074"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('onMessage: ', payload);
  const title = payload.notification.title
  const options = {
    body: payload.notification.body,
    click_action: payload.notification.click_action,
  }
  return self.registration.showNotification(title, options)
})