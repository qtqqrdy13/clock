function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][now.getDay()]
    const timeString = `${hours}:${minutes}:${seconds} ${day}`
    document.getElementById('clock').innerText(timeString);
}

setInterval(updateClock,1000)
updateClock()