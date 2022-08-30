function compra(valorCompra, convenio, cartaoLoja, primeiraCompra) {
  if (valorCompra <= 100) {
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
    } else if (primeiraCompra === true) {
      desconto = valorCompra - valorCompra * 0.05;
      console.log(
        `Por ser pimeira compra você ganhou 5% de desconto, ficando a mesma por ${desconto}`
      );
    } else {
      console.log(
        `Não possui cartão da loja nem desconto, valor final é de R$: ${valorCompra}`
      );
    }
  } else {
    console.log(`O valor máximo para desconto foi atingido ${valorCompra}`);
  }
}
compra(50, true, true, false);
compra(50, true, false, false);
compra(50, false, false, false);
compra(100, false, false, false);
compra(100.1, true, false, false);
compra(100, false, false, true);
