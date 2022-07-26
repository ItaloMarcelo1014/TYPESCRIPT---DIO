let b1 = document.getElementById('button');
let in1 = document.getElementById('input01') as HTMLInputElement;
let in0 = document.getElementById('input02') as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number){
    return numero1 + numero2
}

if(b1){
    b1.addEventListener('click', () => {
        if( in1 && in0) {
            console.log(adicionarNumeros(Number(in1.value), Number(in0.value)));
        }
    })
}
