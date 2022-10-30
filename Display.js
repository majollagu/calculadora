class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterios = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x'
        };
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterios = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterios =  this.valorActual || this.valorAnterios;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString()+numero.toString(); 
        this.imprimirValores();
        
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterios} ${this.signos[this.tipoOperacion] || ''}`;

    }

    calcular() {
        const valorAnterios = parseFloat(this.valorAnterios);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterios)  ) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterios, valorActual);
    }

    
}

