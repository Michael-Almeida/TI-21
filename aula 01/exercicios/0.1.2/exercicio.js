function compra(valorCompra, convenio, cartaoLoja) {
  let desconto = valorCompra;
  if (cartaoLoja === true && convenio === true) {
    desconto = valorCompra - valorCompra * 0.15;
    console.log(
      `Por ter o cartão da loja e convênio ganhou 15% de desconto, ficando o valor de R$: ${desconto}`
    );
  } else if (convenio === true || cartaoLoja === true) {
    desconto = valorCompra - valorCompra * 0.1;
    console.log(
      `Por ter o cartão da loja ou convênio ganhou 10% de desconto, ficando o valor de R$: ${desconto}`
    );
  } else {
    console.log(`Não possui benefícios, valor final é de R$: ${valorCompra}`);
  }
  return desconto;
}
compra(50, true, true);
compra(50, false, true);
compra(50, false, false);
