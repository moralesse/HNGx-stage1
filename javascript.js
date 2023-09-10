let track="Frontend";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
document.getElementById("UTCTime").innerHTML = "Day: " + days[d.getDay()];
document.getElementById("DayOfTheWeek").innerHTML ="Current UTC time in milliseconds: "+ d.getUTCMilliseconds()
document.getElementById("Track").innerHTML ="Track: "+ track