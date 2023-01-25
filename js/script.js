

const resultadoFinal = document.getElementById('resultado');


/* Se detecta el evento submit del form */
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    try {
        const operacion = document.getElementById('operation');
        const operacionFinal =  operacion.value.replace('x', '*');

        resultadoFinal.classList.remove('error');
        
        document.querySelector('.calculator').classList.remove('error-line');
        document.querySelector('.calculator').classList.add('valid-line');
        /* Se realiza la operación ingresada en el display */
        resultadoFinal.textContent = '= '+(eval(operacionFinal));
    } catch (error) {
        /* Informa que hay un error */
        resultadoFinal.textContent = 'Expresión mal formada';
        resultadoFinal.classList.add('error');
        document.querySelector('.calculator').classList.remove('valid-line');
        document.querySelector('.calculator').classList.add('error-line');
    };
});

/* Se detecta si el usuario presiona la tecla Escape */
document.getElementById('operation').addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        document.querySelector('form').reset();
        resultadoFinal.textContent = '';
        document.querySelector('.calculator').classList.remove('valid-line');
        document.querySelector('.calculator').classList.remove('error-line');
    }
});