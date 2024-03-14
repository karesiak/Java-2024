const sounds = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
}
addEventListener('keypress',(ev)=>{
    const key = ev.key;
    /*
    switch(key){
    case 'a':
        clap.currentTime = 0
        clap.play()
        break;
    case 's':
        kick.currentTime = 0
        kick.play()
        break;
    case 'd':
        hithat.currentTime = 0
        hithat.play()
        break;    
    }
    */

    const sound = sounds[key];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
});