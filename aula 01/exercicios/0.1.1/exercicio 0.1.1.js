function juros(valorInicial, diasAtraso) {
  const valorJurosDia = diasAtraso * (valorInicial * 0.0033);
  const valorFinal = valorInicial + valorJurosDia;
  console.log(`O montande com acréssicmo dos juros é de ${valorFinal}`);
}
juros(10, 60);
