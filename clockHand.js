setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();


    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourr.style.transform = `rotate(${hrotation}deg)`;
    minuu.style.transform = `rotate(${mrotation}deg)`;
    secoo.style.transform = `rotate(${srotation}deg)`;

}, 1000);
