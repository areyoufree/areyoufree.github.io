// Initialize EmailJS
emailjs.init('irZCTHlVHXXFeLSi4');

// Get the slider, output, emoji container, and submit button elements
const slider = document.getElementById('excitementSlider');
const output = document.getElementById('outputValue');
const emojiContainer = document.getElementById('emojiContainer');
const submitButton = document.getElementById('submitButton');

let previousValue = slider.value;

// Function to update the background color based on the slider value
function updateSliderColor(value) {
    let color;
    if (value <= 3) {
        const redToOrange = (value / 3) * 255;
        color = `rgb(255, ${Math.round(redToOrange)}, 0)`;
    } else if (value <= 6) {
        const orangeToYellow = ((value - 3) / 3) * 100;
        color = `rgb(255, 255, ${Math.round(orangeToYellow)})`;
    } else {
        const yellowToGreen = ((value - 6) / 4) * 255;
        color = `rgb(${255 - Math.round(yellowToGreen)}, 255, 0)`;
    }
    slider.style.backgroundColor = color;
}
function submitted() {
    window.location.href = "../bye/bye.html";
}
// Function to create a floating emoji based on the sliding direction
function createEmoji(emojiType) {
    const emoji = document.createElement('span');
    emoji.className = 'emoji';
    emoji.textContent = emojiType;

    // Set a random horizontal position for the emoji
    const randomX = Math.random() * slider.offsetWidth;
    emoji.style.left = `${randomX}px`;

    // Add the emoji to the container
    emojiContainer.appendChild(emoji);

    // Remove the emoji after animation ends
    setTimeout(() => {
        emoji.remove();
    }, 1500);
}

// Update the output value and create emojis when the slider is moved
slider.addEventListener('input', function () {
    const value = parseInt(this.value);
    output.textContent = value;
    updateSliderColor(value);

    if (value > previousValue) {
        createEmoji('❤️');
    } else if (value < previousValue) {
        createEmoji('🖕');
    }
    previousValue = value;
});

// Send the slider value via email when the submit button is clicked
submitButton.addEventListener('click', function () {
    const excitementLevel = slider.value;

    // Prepare the email parameters
    const templateParams = {
        excitement_level: excitementLevel,
    };

    emailjs.send('service_7jlmmxd', 'template_puuri7r', templateParams)
        .then(function (response) {
            window.location.href = "../bye/bye.html";  // Redirect to todo.html after success
        });
});

// Initial color update on page load
updateSliderColor(slider.value);
