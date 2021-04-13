from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

@api_view(['POST'])
@csrf_exempt
def carTotal(request):
    dic = request.data
    #text = data.decode()
    #dic = json.loads(text)
    #dic = request.json()
    
    valorTotSemFrete = dic['maracuja'] * 1.15 + dic['morango'] * 1.35 + dic['barrachoco'] * 1.25
    if (valorTotSemFrete >= 10):
        frete = 0
    else:
        frete = 15
    return JsonResponse(dict(
        cartId = '5f4d12e',
        totCompras = valorTotSemFrete,
        frete = frete,
        totComprasEfrete = valorTotSemFrete + frete,
        date = datetime.now(),
        products = [
            dict(
                productId = 'maracuja',
                brand = 'RbR',
                name = 'trufa de maracujá',
                price = 1.15,
                quantity = dic['maracuja']
            ),
            dict(
                productId = 'morango',
                brand = 'RbR',
                name = 'trufa de morango',
                price = 1.35,
                quantity = dic['morango']
            ),
            dict(
                productId = 'barrachoco',
                brand = 'RbR',
                name = 'barra de chocolate',
                price = 1.25,
                quantity = dic['barrachoco']
            )
        ]        
    ))
    

# Create your views here.
