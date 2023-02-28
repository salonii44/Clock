setInterval(() => {
    
    d = new Date();
    htime = d.getHours();           //1 hour = 3600 sec
    mtime = d.getMinutes();            // 1 minute = 60 sec
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;


    hour.style.transform = `rotate(${hrotation}deg)`;

    minute.style.transform = `rotate(${mrotation}deg)`;

    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);