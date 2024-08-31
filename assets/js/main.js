function tipoDePessoa() {
  const pessoaFisica = document.getElementById("pessoaFisica");
  const pessoaJuridica = document.getElementById("pessoaJuridica");
  const cpfCnpjId = document.getElementById("cpfCnpjId");
  const cpfCnpj = document.getElementById("cpfCnpj");

  pessoaFisica.addEventListener("change", () => {
    cpfCnpj.placeholder = "CPF";
    cpfCnpjId.innerHTML = "CPF";
  });

  pessoaJuridica.addEventListener("change", () => {
    cpfCnpj.placeholder = "CNPJ";
    cpfCnpjId.innerHTML = "CNPJ";
  });
}
