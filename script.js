// // Set the target date to September 12, 2022
// const targetDate = new Date("2022-09-12");
    
// // Function to calculate the number of days elapsed
// function updateTimer() {
//     const currentDate = new Date();
//     const timeDifference = currentDate - targetDate;
//     const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     // Display the number of days elapsed
//     document.getElementById("timer").textContent = `Fun fact! I've been programming for ${daysElapsed} days!`;
// }

// // Call the updateTimer function initially to display the count
// updateTimer();

// // Update the count every second
// setInterval(updateTimer, 1000);

 
    // Set the target date and time to September 12, 2022, at 12:00 AM (midnight)
    const targetDate = new Date("2022-09-12T00:00:00");

    // Function to update the timer
    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        if (timeDifference <= 0) {
            document.getElementById("timer").textContent = "Time's up!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = `Fun fact! I've been programming for : ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    // Call the updateTimer function initially to display the elapsed time
    updateTimer();

    // Update the timer every second
    setInterval(updateTimer, 1000);
 
