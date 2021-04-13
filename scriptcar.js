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
        if ($('#maracuja__quanty').val() == 0) {
            return;
        }
        $('#maracuja__quanty').val(function(i,qtd) {return --qtd});
     }) 

     $('#maracuja__add').click(function() {
        $('#maracuja__quanty').val(function(i,qtd) {return ++qtd});
    })  

    $('#morango__sub').click(function() {
        if ($('#morango__quanty').val() == 0) {
            return;
        }
        $('#morango__quanty').val(function(i,qtd) {return --qtd});
     }) 

     $('#morango__add').click(function() {
        $('#morango__quanty').val(function(i,qtd) {return ++qtd});
    })  

    $('#barrachoco__sub').click(function() {
        if ($('#barrachoco__quanty').val() == 0) {
            return;
        }
        $('#barrachoco__quanty').val(function(i,qtd) {return --qtd});
     }) 

     $('#barrachoco__add').click(function() {
        $('#barrachoco__quanty').val(function(i,qtd) {return ++qtd});
    }) 

    $('#calculador').click(function() {

        var morango = $('#morango__quanty').val(); 
        var maracuja = $('#maracuja__quanty').val();
        var barraChoco = $('#barrachoco__quanty').val();

        $.ajax({
            url:'http://localhost:8000/carTotal/',
            data:JSON.stringify({'maracuja': maracuja, 'morango': morango,'barrachoco' : barraChoco}),
            dataType: 'json',
            contentType: 'application/json',
            method: 'POST',
        }).done(function(resp){

           var frete = resp['frete']
           if(frete == 0)
                $('#frete').html('Parabéns, sua compra tem frete grátis!')
           else {
                $('#frete').html('Seu frete é R$' + frete)
           }

           $('#total').html('Total ' +  resp['totComprasEfrete'])

        });       
          
    })
})

