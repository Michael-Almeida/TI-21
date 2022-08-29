function compraBananas(quantidadeAlunos, turno) {
  const pesoBananas = (90 * quantidadeAlunos) / 1000;
  const quantidadeBananasPorTurno = pesoBananas * turno;
  console.log(`Peso das bananas a comprar: ${pesoBananas}Kg`);
  console.log(
    `Quantidade total a comprar de banana: ${quantidadeBananasPorTurno}Kg `
  );
}
compraBananas(200, 2);
