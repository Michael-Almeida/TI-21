function compra(valorCompra, convenio, cartaoLoja) {
  let desconto = valorCompra;
  if (cartaoLoja && convenio) {
    desconto = valorCompra - valorCompra * 0.15;
    console.log(
      `Por ter o cartão da loja e convênio ganhou 15% de desconto, ficando o valor de R$: ${desconto}`
    );
  } else if (convenio || cartaoLoja) {
    desconto = valorCompra - valorCompra * 0.1;
    console.log(
      `Por ter o cartão da loja ou convênio ganhou 10% de desconto, ficando o valor de R$: ${desconto}`
    );
  } else {
    console.log(`Não possui benefícios, valor final é de R$: ${valorCompra}`);
  }
  return desconto;
}
compra(1000, true, true);
compra(1000, false, true);
compra(1000, false, false);
