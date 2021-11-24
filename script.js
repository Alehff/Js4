


function enviar () {
    var ambiente = document.querySelector("#ambiente")
    var ReAmbiente = ambiente.value
    var qualidadeComida = document.querySelector("#qualidade-comida")
    var ReComida = qualidadeComida.value
    var atendimento = document.querySelector("#atendimento")
    var ReAtendimento = atendimento.value
    var resultAmbiente = document.querySelector(".r-ambiente")
    resultAmbiente.innerHTML= `Satisfação com o ambiente ${ReAmbiente}`
    var resultComida = document.querySelector(".r-comida")
    resultComida.innerHTML= `satisfação com a qualidade da comida ${ReComida}`
    var resultAtendimento = document.querySelector(".r-atendimento")
    resultAtendimento.innerHTML= `Satisfação com o atendimento ${ReAtendimento}`

}