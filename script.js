document.getElementById('FormArea').addEventListener('submit', function(event) {

    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value
    const message = document.getElementById('textBox').value

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_c6randq', 'template_1z0by8o', templateParams)
        .then((response) =>{
           console.log('SUCCESS!', response.status, response.text)
           alert('Mensagem enviada com sucesso!')
        }, (error) =>{
           console.log('FAILED...', error)
           alert('Ocorreu um erro ao enviar a mensagem.')
        })
})
