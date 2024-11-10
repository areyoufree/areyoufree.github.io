// Initialize EmailJS with your User ID (replace with your own EmailJS User ID)
emailjs.init('irZCTHlVHXXFeLSi4'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID

// Function to handle clicks on Arcane and League
function sendEmail(action) {
    const emailParams = {
        action: action  // This will be the action that was clicked (either "Arcane" or "League")
    };

    emailjs.send('service_7jlmmxd', 'template_puuri7r', emailParams)
        .then(function (response) {
            window.location.href = "../end/end.html";  // Redirect to todo.html after success
        });
}

// Event listener for clicking on Arcane
document.getElementById('arcane').addEventListener('click', function () {
    sendEmail('Arcane');  // Send "Arcane" as the action when clicked
});

// Event listener for clicking on League
document.getElementById('league').addEventListener('click', function () {
    sendEmail('League');  // Send "League" as the action when clicked
});
