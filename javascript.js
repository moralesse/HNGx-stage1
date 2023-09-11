let track="Frontend";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function timer(){
    const d = new Date();
const date = d.getUTCDate();
const year = d.getUTCFullYear();
const hours = d.getUTCHours().toString().padStart(2, '0');
const minutes = d.getUTCMinutes().toString().padStart(2, '0');
const ms = d.getUTCMilliseconds();
document.getElementById("Track").innerHTML ="Track: "+ track
document.getElementById("DayOfTheWeek").innerHTML = "Day: " + days[d.getUTCDay()]+" "+date+" "+ months[d.getUTCMonth()]+", "+year;
document.getElementById("UTCTime").innerHTML ="Time: " + hours +":"+ minutes + ":" + ms + " UTC";
}

timer();
setInterval(timer, 1000);
