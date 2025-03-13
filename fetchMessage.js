const firebaseConfig = {
    apiKey: "AIzaSyBdwMqX4Xa1ZDs1aMzHB1t3tuul3UOB0Qc",
    authDomain: "manoj-portfolio-ffb64.firebaseapp.com",
    databaseURL: "https://manoj-portfolio-ffb64-default-rtdb.firebaseio.com",
    projectId: "manoj-portfolio-ffb64",
    storageBucket: "manoj-portfolio-ffb64.firebasestorage.app",
    messagingSenderId: "200138913451",
    appId: "1:200138913451:web:353f4bf8f35cdcd22469ee",
    measurementId: "G-B7MES67BD1"
  };
//   initialize firebase
firebase.initializeApp(firebaseConfig);




// fetch message 
function fetchMessages() {
    const messageTable = document.getElementById("messageTable");
    // reference your database
// var contactFormDB = firebase.database().ref("contactForm");
  
    // Reference 'contacts' node in Firebase
    firebase.database().ref("contactForm").on("value", (snapshot) => {
        messageTable.innerHTML = ""; // Clear previous data
  
        snapshot.forEach((childSnapshot) => {
            let data = childSnapshot.val();
  
            // Create a new table row
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <span class="float-right font-weight-bold">${new Date(data.timestamp).toLocaleString()}</span>
                    <strong>${data.name}</strong> (${data.email}): ${data.message}
                </td>
            `;
  
            // Append row to table
            messageTable.appendChild(row);
        });
    });
  }
  
  // Call function to fetch messages
  fetchMessages();
  
  