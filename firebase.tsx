//使うかわからん
export default (async () => {
    try {
      const firebase = require('firebase')
      const config = {
        apiKey: "AIzaSyATGDxK7kHo4EATACjvTzlpyjwKtU96JQk",
        authDomain: "buslocationsystem-data.firebaseapp.com",
        projectId: "buslocationsystem-data",
      }
      require("firebase/firestore");
      firebase.initializeApp(config)
      

    } catch (err) {

    }
  })()
