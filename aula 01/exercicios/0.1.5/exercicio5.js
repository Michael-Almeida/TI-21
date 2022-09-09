//validação para ver se o desconto é menor que 100
function aplicarDesconto(valorDesconto) {
  if (valorDesconto > 100) {
    return 100;
  }
  return valorDesconto;
}

function compra(valorCompra, convenio, cartaoLoja, primeiraCompra) {
  // boleanos por padrão dentro do if não necessitam do ===true pois ele já considera o valor verdadeiro
  if (cartaoLoja && convenio) {
    desconto = valorCompra - aplicarDesconto(valorCompra * 0.15);
    console.log(
      `Por ter o cartão da loja e convênio ganhou 15% de desconto (se valor máximo de desconto for menor de R$100,00), ficando o valor de R$: ${desconto}`
    );
  } else if (convenio || cartaoLoja) {
    desconto = valorCompra - aplicarDesconto(valorCompra * 0.1);
    console.log(
      `Por ter o cartão da loja ou convênio ganhou 10% de desconto (se valor máximo de desconto for menor de R$100,00), ficando o valor de R$: ${desconto}`
    );
  } else if (primeiraCompra) {
    desconto = valorCompra - aplicarDesconto(valorCompra * 0.05);
    console.log(
      `Por ser pimeira compra você ganhou 5% de desconto (se valor máximo de desconto for menor de R$100,00), ficando a mesma por ${desconto}`
    );
  } else {
    desconto = valorCompra - aplicarDesconto(valorCompra - 100);
    console.log(
      `O desconto máximo foi atingido, o valor de sua compra é de: ${desconto}`
    );
  }
}
compra(600, true, true, false);
/*compra(50, true, false, false);
compra(50, false, false, false);
compra(100, false, false, false);
compra(100.1, true, false, false);
compra(100, false, false, true);
*/
