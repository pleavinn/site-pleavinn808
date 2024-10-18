document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = "index.html"; // Redireciona para index.html
});


const radioPlayer = document.getElementById('radio-player');
const radioSource = document.getElementById('radio-source');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

// Substitua pela URL da sua estação de rádio
const radioURL = 'https://stream.radioparadise.com/aac-320'; 

playButton.addEventListener('click', () => {
    radioSource.src = radioURL; // Define a fonte do áudio
    radioPlayer.load(); // Carrega a nova fonte
    radioPlayer.play(); // Inicia a reprodução
});

stopButton.addEventListener('click', () => {
    radioPlayer.pause(); // Para a reprodução
    radioPlayer.currentTime = 0; // Reseta o tempo para o início
});
