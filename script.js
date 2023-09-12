// Function to get the current date and time in the desired format
function getCurrentDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    return dayOfWeek;
}

// Function to update the current day of the week element
function updateCurrentDayOfTheWeek() {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `Current Day: ${getCurrentDayOfTheWeek()}`;
}


function getCurrentDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

// Function to update the current date and time element
function updateCurrentDateTime() {
    const currentDateTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentDateTimeElement.textContent = `Current UTC Time: ${getCurrentDateTime()}`;
}

// Update the current date and time element every second
setInterval(updateCurrentDayOfTheWeek, 1000);
setInterval(updateCurrentDateTime, 1000);


