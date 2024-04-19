document.getElementById('start-record-btn').addEventListener('click', function() {
    console.log('Gravação iniciada...');
    this.disabled = true;
    document.getElementById('stop-record-btn').disabled = false;
});

document.getElementById('stop-record-btn').addEventListener('click', function() {
    console.log('Gravação finalizada...');
    this.disabled = true;
    document.getElementById('start-record-btn').disabled = false;
    document.getElementById('transcription').innerText = 'Simulação de áudio capturado e transcrição realizada.';
});
