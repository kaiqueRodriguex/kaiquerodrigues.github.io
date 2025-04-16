// Elementos da calculadora
const display = document.getElementById('display');

// Funções principais
const limpar = () => {
    display.value = '';
};

const adicionarValor = (valor) => {
    display.value += valor;
};

const calcular = () => {
    try {
        const expressao = display.value
            .replace(/×/g, '*')
            .replace(/,/g, '.');
        
        const resultado = eval(expressao);
        display.value = Number.isInteger(resultado) ? 
            resultado : 
            resultado.toFixed(2);
    } catch (error) {
        alert('Expressão inválida!');
        limpar();
    }
};

// Event Listeners para teclado
document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    
    if (tecla >= '0' && tecla <= '9' || tecla === '.' || tecla === '%') {
        adicionarValor(tecla);
    } else if (['+', '-', '*', '/'].includes(tecla)) {
        adicionarValor(tecla);
    } else if (tecla === 'Enter') {
        calcular();
    } else if (tecla === 'Escape') {
        limpar();
    }
});
