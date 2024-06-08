document.getElementById('FormArea').addEventListener('submit', function(event) {

    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const end = document.getElementById('endereco').value
    const qnt = document.getElementById('qnt').value
    const valor = document.getElementById('valortotal').textContent


    const templateParams = {
        from_name: name,
        from_email: email,
        tel: tel,
        end: end,
        qnt: qnt,
        valor: valor
    };

    emailjs.send('service_c6randq', 'template_g78fnm9', templateParams)
        .then((response) =>{
           console.log('SUCCESS!', response.status, response.text)
           alert('Mensagem enviada com sucesso!')
        }, (error) =>{
           console.log('FAILED...', error)
           alert('Ocorreu um erro ao enviar a mensagem.')
        })
})
