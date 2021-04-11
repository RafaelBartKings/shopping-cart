// FUNDO TROCA DE COR CONFORME O HORARIO DO DIA
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    // carregar imagem de acordo com o horário do dia.    

    if (hora >= 0 && hora < 12) {
        // DIA!        
        document.body.style.background = '#e2cd9f'        

    } else if (hora >= 12 && hora < 18) {
        // TARDE!        
        document.body.style.background = '#b9846f'        

    } else {
        // NOITE!        
        document.body.style.background = '#515154'
    }
}

$(document).ready(function() {

    $('#maracuja__sub').click(function() {
        $('#maracuja__quanty').val(function(i,qtd) {return --qtd});
     }) 

     $('#maracuja__add').click(function() {
        $('#maracuja__quanty').val(function(i,qtd) {return ++qtd});
    })  

    $('#morango__sub').click(function() {
        $('#morango__quanty').val(function(i,qtd) {return --qtd});
     }) 

     $('#morango__add').click(function() {
        $('#morango__quanty').val(function(i,qtd) {return ++qtd});
    })  

    $('#calculador').click(function() {

        var morango = $('#morango__quanty').val() * 1.35; 
        var maracuja = $('#maracuja__quanty').val() * 1.15;

        var total = morango + maracuja;
        if (total >= 10) {
            var frete = 0
            $('#frete').html('Parabéns, sua compra tem frete grátis!')

        } else {
            var frete = 15
            $('#frete').html('Seu frete é R$15.00')
        }

        $('#total').html('Total ' +  (frete + total))
        
        
    }) 

     


    
    
    
    








})

