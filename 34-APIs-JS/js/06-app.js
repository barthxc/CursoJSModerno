const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click',ejecutarSpeechAPI);



function ejecutarSpeechAPI(){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = function(){
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    }

    recognition.onresult = function(e){
        const {confidence,transcript} = e.results[0][0];
        console.log(confidence);
        console.log(transcript);

        const speech = document.createElement('p');
        speech.innerHTML =`Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence*100)}`;

        
        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }


        

}