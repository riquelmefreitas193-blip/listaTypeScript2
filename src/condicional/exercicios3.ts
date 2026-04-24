// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão

export function exercicio3(){

    let num1: number= Number(prompt("digite seu primeiro números: "))
    let num2: number = Number(prompt("digite seu segundo números: "))
    let opc = Number(prompt(`1 - Soma\n 2 - Subtracao\n 3 - Multiplicacao\n 4 - Divisao`))

    switch(opc) {
        case 1:
            let soma = num1 + num2
            console.log(`Soma: ${soma}`)
            break
        case 2:
            let subtracao = num1 - num2
            console.log(`Subtração: ${subtracao}`)
            break
        case 3: 
            let multiplicacao = num1 * num2
            console.log(`Multiplicação: ${multiplicacao}`)
            break
        case 4: 
            let divisao = num1 / num2
            console.log(`Divisão: ${divisao}`)
            break
        default:
            console.log("opção inválida.")
    }

}