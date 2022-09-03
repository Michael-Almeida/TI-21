function compraBananas(quantidadeAlunos, turno) {
  const pesoBananas = (90 * quantidadeAlunos) / 1000;
  const quantidadeBananasPorTurno = pesoBananas * turno;
  const margemQuantidadeBananas =
    quantidadeBananasPorTurno + quantidadeBananasPorTurno * 0.2;

  console.log(`Peso das bananas a comprar: ${pesoBananas}Kg`);
  console.log(
    `Quantidade total a comprar de banana: ${margemQuantidadeBananas}Kg `
  );
}
compraBananas(200, 1);
