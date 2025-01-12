// Set the target date to January 1, 2026
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Stop the countdown if the target date is reached
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("day").innerText = "0";
    document.getElementById("hour").innerText = "0";
    document.getElementById("minute").innerText = "0";
    document.getElementById("second").innerText = "0";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("day").innerText = days;
  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
