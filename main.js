function getTime() {
    const time = document.querySelector(".time");
    const newDate = new Date();
    const hour = String(newDate.getHours()).padStart(2, 0);
    const minutes = String(newDate.getMinutes()).padStart(2, 0);
    const seconds = String(newDate.getSeconds()).padStart(2, 0);

    time.innerText = `${hour}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);
