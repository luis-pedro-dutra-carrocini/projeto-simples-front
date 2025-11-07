async function chamarAPI() {
  const resposta = await fetch("https://projeto-simples-back-4hj5.onrender.com/")
  const dados = await resposta.json()
  document.getElementById("resposta").textContent = dados.message
}