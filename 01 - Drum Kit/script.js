// event.code é para ver o valor da tecla pressionada

document.body.addEventListener('keyup', (event)=>{   // keyup é a tecla que foi pressionada
    playSound( event.code.toLowerCase() ); 
});

document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){         // Deixar Amarelo ao pressionar
        keyElement.classList.add('active'); 

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0; 

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}