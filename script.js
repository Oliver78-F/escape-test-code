document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var code = document.getElementById('code').value;
    var messageContainer = document.getElementById('message');

    if (code === '624') {
        messageContainer.innerHTML = 'Bonne réponse.';
    } else {
        messageContainer.innerHTML = 'Mauvaise réponse.';
    }
});
