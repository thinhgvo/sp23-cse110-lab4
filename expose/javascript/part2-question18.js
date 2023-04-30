function print() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(print, 1000);