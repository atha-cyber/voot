export default function handler(req, res) {
  res.status(200).json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "vooting-guru.firebasestorage.app",
    messagingSenderId: "643701954972",
    appId: "1:643701954972:web:5db3499faeb8ca91919059"
  });
}
