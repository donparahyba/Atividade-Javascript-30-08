function escolher() {
    let num1 = parseFloat(document.getElementById("nm1").value);
    let num2 = parseFloat(document.getElementById("nm2").value);
    let operacao = document.getElementById("opcao").value;
    let resultado;

    if (operacao === "dii" && num2 === 0) {
        document.getElementById("final").innerHTML = "<p class='text-danger mt-5'>Divisões com 0 não permitidas!!!</p>";
        return;
    } 

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("final").innerHTML = "<p class='text-danger mt-5'>Preencha os dois campos com números válidos!!!</p>";
        return;
    }

    switch (operacao) {
        case "adi":
            resultado = num1 + num2;
            document.getElementById("final").innerHTML = `<p class='text-success mt-5'>O resultado da adição é: ${resultado}</p>`;
            break;
        case "sub":
            resultado = num1 - num2;
            document.getElementById("final").innerHTML = `<p class='text-success mt-5'>O resultado da subtração é: ${resultado}</p>`;
            break;
        case "mult":
            resultado = num1 * num2;
            document.getElementById("final").innerHTML = `<p class='text-success mt-5'>O resultado da multiplicação é: ${resultado}</p>`;
            break;
        case "dii":
            resultado = num1 / num2;
            document.getElementById("final").innerHTML = `<p class='text-success mt-5'>O resultado da divisão é: ${resultado}</p>`;
            break;
        default:
            document.getElementById("final").innerHTML = "<p class='text-warning mt-5'>Operação inválida</p>";
            break;
    }
}