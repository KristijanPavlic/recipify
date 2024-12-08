export default function getCurrentGreeting() {
  const hours = new Date().getHours(); // Get the current hour in 24-hour format

  if (hours >= 5 && hours < 12) {
    return "Good Morning"; // 5 AM to 11:59 AM
  } else if (hours >= 12 && hours < 18) {
    return "Good Afternoon"; // 12 PM to 5:59 PM
  } else if (hours >= 18 && hours < 22) {
    return "Good Evening"; // 6 PM to 9:59 PM
  } else {
    return "Good Night"; // 10 PM to 4:59 AM
  }
}
