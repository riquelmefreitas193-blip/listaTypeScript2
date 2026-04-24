// Condicional
import { exercicio1 } from "./condicional/exercicios1.js";
import { exercicio2 } from "./condicional/exercicios2.js";
import { exercicio3 } from "./condicional/exercicios3.js";
import { exercicio4 } from "./condicional/exercicios4.js";

document.getElementById("btn1-condicional")?.addEventListener('click', exercicio1)
document.getElementById("btn2-condicional")?.addEventListener('click', exercicio2)
document.getElementById("btn3-condicional")?.addEventListener('click', exercicio3)
document.getElementById("btn4-condicional")?.addEventListener('click', exercicio4)

// repeticao

import { exercicio1 as repeticao1} from "./repeticao/exercicio1.js";
import { exercicio2 as repetticao2} from "./repeticao/exercicio2.js";

document.getElementById("btn1-repeticao")?.addEventListener('click', repeticao1)
document.getElementById("btn2-repeticao")?.addEventListener('click', repetticao2)