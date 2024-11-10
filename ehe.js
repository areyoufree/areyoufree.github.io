emailjs.init('irZCTHlVHXXFeLSi4'); // Replace with your actual User ID

// Populate the dropdowns when the page loads
window.onload = function () {
    populateDays();
    populateMonths();
    populateYears();
};

function populateDays() {
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

function populateMonths() {
    const monthSelect = document.getElementById('month');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

function populateYears() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= currentYear + 5; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

document.getElementById('freeTimeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const selectedDate = `${month}/${day}/${year}`;

    const emailParams = {
        day: day,
        month: month,
        year: year,
        selectedDate: selectedDate
    };

    emailjs.send('service_7jlmmxd', 'template_gme4hhr', emailParams)
        .then(function (response) {
            console.log('Email sent successfully', response);
            alert('Your availability has been sent!');
        })
        .catch(function (error) {
            console.error('Error sending email', error);
            alert('There was an error sending your email. Please try again later.');
        });

});
console.log("Selected Day:", day);
console.log("Selected Month:", month);
console.log("Selected Year:", year);
