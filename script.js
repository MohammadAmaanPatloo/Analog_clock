// Set an interval to update the clock every second (1000 milliseconds)
setInterval(() => {
  // Get the current date and time
  d = new Date();
  // Extract the hours, minutes, and seconds from the current time
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  // Calculate the rotation angles for the hour, minute, and second hands
  hrotation = 30 * htime + mtime / 2; // Each hour is 30 degrees, and the minute hand contributes to the hour hand's position
  mrotation = 6 * mtime; // Each minute is 6 degrees
  srotation = 6 * stime; // Each second is 6 degrees
  // Update the CSS transform property of the hour, minute, and second hands
  // to rotate them based on the calculated rotation angles
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
