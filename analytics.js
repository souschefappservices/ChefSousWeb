import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAnalytics,
  isSupported,
  logEvent,
  setConsent
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZpZo5Q0ih4Ow06R0ojV1uvBLoaNrowCE",
  authDomain: "souschef-6ba25.firebaseapp.com",
  projectId: "souschef-6ba25",
  storageBucket: "souschef-6ba25.firebasestorage.app",
  messagingSenderId: "460469485988",
  appId: "1:460469485988:web:c5102fb68150729323c131",
  measurementId: "G-EF514VBSV1"
};

setConsent({
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied"
});

const app = initializeApp(firebaseConfig);

isSupported().then((supported) => {
  if (!supported) {
    return;
  }

  const analytics = getAnalytics(app);

  document.querySelectorAll('a[href*="apps.apple.com"]').forEach((link) => {
    link.addEventListener("click", () => {
      logEvent(analytics, "app_store_click", {
        link_url: link.href,
        page_location: window.location.href,
        page_title: document.title
      });
    });
  });
});
