// 2. Desenvolva a tabuada de um número usando for.
export function exercicio2() {
    let num = Number(prompt("Digite um número:"));
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} ${num * i}`);
    }
}
