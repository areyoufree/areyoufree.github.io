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
    for (let i = currentYear; i <= currentYear + 1; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

// Form submission event listener
document.getElementById('freeTimeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const selectedDate = `${month}/${day}/${year}`;

    console.log("Form Submitted");
    console.log("Selected Date:", selectedDate);  // Debugging output

    const emailParams = {
        day: day,
        month: month,
        year: year,
        selectedDate: selectedDate
    };

    // Send email using EmailJS
    emailjs.send('service_7jlmmxd', 'template_gme4hhr', emailParams)
        .then(function (response) {
            window.location.href = "todo/todo.html";  // Redirect to todo.html after success
        });
});
