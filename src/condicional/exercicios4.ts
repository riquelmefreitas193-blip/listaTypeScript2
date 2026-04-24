// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

export function exercicio4(){

let valor1:number = Number(prompt("Informe o seu primeiro valor: "))
let valor2: number = Number(prompt("Informe o seu segundo  valor: "))

if(valor1 == valor2){
    console.log('Número inguais')
}else if(valor1 > valor2){
    console.log("O primeiro númeo é maior")
}else if(valor1 < valor2){
    console.log("O segundo é maior")
}
}