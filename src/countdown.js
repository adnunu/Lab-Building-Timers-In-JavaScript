/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  if (typeof startTime !== 'number' || startTime < 0) {
    throw new Error('startTime must be a non-negative number');
  }
  
  if (typeof interval !== 'number' || interval <= 0) {
    throw new Error('interval must be a positive number');
  }
  
  let remainingTime = startTime;
  
  // Log the starting time
  console.log(remainingTime);
  
  if (startTime === 0) {
    return null;
  }
  
  const timerId = setInterval(() => {
    remainingTime--;
    
    // Only log if remainingTime > 0
    if (remainingTime > 0) {
      console.log(remainingTime);
    }
    
    // Stop when we reach 0
    if (remainingTime <= 0) {
      clearInterval(timerId);
    }
  }, interval);
  
  return timerId;
}


module.exports = { countdownTimer };
