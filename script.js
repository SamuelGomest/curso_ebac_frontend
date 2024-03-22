$(document).ready(function() {
    // Aplicar máscaras aos campos
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Manipular envio do formulário
    $('#cadastro-form').submit(function(event) {
        // Impedir o comportamento padrão do envio do formulário
        event.preventDefault();

        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor

        // Exibir a mensagem de sucesso
        $('#success-message').show();

        // Limpar o formulário após 3 segundos
        setTimeout(function() {
            $('#cadastro-form')[0].reset();
            $('#success-message').hide();
        }, 1000);
    });
});
