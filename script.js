function Validar() {
    var Usuário = document.getElementById('textn1').value
    var Senha = document.getElementById('textn2').value
    
    if (Usuário === '' || Senha === '' ) {
            window.alert('Por favor, preencha todos os campos!')
            return;
        }
        window.alert(`Bem-vindo de volta, ${Usuário} !` )
        window.location.href = "https://mifontez.github.io/Site-01-pets/"

        
}

