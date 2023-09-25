$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000')
});

$('form').validate({
    rules: {
        nome: {
            required:true
        },
        email: {
            required:true,
            email: true
        },
        telefone: {
            required:true
        },

        cpf: {
            required:true
        },

        cep: {
            required:true
        },
        
        endereço: {
            required:true
        },

    },
    messages: {
        nome: 'Por favor, insira o seu nome.'

    },
    
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }
})
