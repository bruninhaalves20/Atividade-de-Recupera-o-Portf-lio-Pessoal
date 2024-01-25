
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    function submitForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        alert('Formulário enviado com sucesso!');
        document.getElementById('contact-form').reset();
    }
    
});