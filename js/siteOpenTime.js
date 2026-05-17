const now = new Date();

let hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, '0');

const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12;

document.getElementById('timeOpened').innerText = `${hours}:${minutes} ${ampm}`;
