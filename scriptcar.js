// FUNDO TROCA DE COR CONFORME O HORARIO DO DIA
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong> ${hora}:00 </strong>`

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
        
    function verificarCar() {
        var tot = $('#maracuja__quanty').val() + $('#morango__quanty').val() + $('#barrachoco__quanty').val()
        var podeFinalizarCompra = tot > 0

        if (podeFinalizarCompra) {
            $('#calculador').prop('disabled', false) 
            $("#resumo").css("visibility", "visible");   
        } else {
            $('#calculador').prop('disabled', true)
            $("#resumo").css("visibility", "hidden");
        }
        
    }

    verificarCar()

    $('#maracuja__sub').click(function() {
        if ($('#maracuja__quanty').val() == 0) {
            return;
        }
        $('#maracuja__quanty').val(function(i,qtd) {return --qtd});
        verificarCar()
     }) 

     $('#maracuja__add').click(function() {
        $('#maracuja__quanty').val(function(i,qtd) {return ++qtd});
        verificarCar()
    })  

    $('#morango__sub').click(function() {
        if ($('#morango__quanty').val() == 0) {
            return;
        }
        $('#morango__quanty').val(function(i,qtd) {return --qtd});
        verificarCar()
     }) 

     $('#morango__add').click(function() {
        $('#morango__quanty').val(function(i,qtd) {return ++qtd});
        verificarCar()
    })  

    $('#barrachoco__sub').click(function() {
        if ($('#barrachoco__quanty').val() == 0) {
            return;
        }
        $('#barrachoco__quanty').val(function(i,qtd) {return --qtd});
        verificarCar()
     }) 

     $('#barrachoco__add').click(function() {
        $('#barrachoco__quanty').val(function(i,qtd) {return ++qtd});
        verificarCar()
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
                //$('#frete').alert('Adicione valores antes de finalizar!')
                $('#frete').html('Parabéns, sua compra tem frete grátis!')
           else {
                $('#frete').html('Frete no valor de R$' + frete)
           }

           $('#total').html('Total R$' +  resp['totComprasEfrete'])

        });       
          
    })


})

