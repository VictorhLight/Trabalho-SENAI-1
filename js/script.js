class Moedas

 {
    aed;
    dolar;
    real;
    yenes;
    realYenes;
    realDolar;
    realAED;

    constructor() 

    {
        this.aed = 1.27
        this.dolar = 4.66
        this.yenes = 0.038
        this.realAED = 0.7874
        this.realDolar = 0.2146
        this.realYenes = 26.319
    }

  
  converterRealDolar() 

  {
        this.real = document.getElementById("realDolar").value;
        const valorEmDolar = (this.real) / this.dolar;
        const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        document.getElementById("resultadoRealDolar").innerText = `${valorEmReal} é igual a ${valorConvertido}`
  }


  converterRealAED() 

  {
        this.real = document.getElementById("realAED").value;
        const valorEmAED = (this.real) / this.aed;
        const valorConvertido = valorEmAED.toLocaleString('en-US', {style: 'currency', currency: 'AED'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        document.getElementById("resultadoRealAED").innerText = `${valorEmReal} é igual a ${valorConvertido}`
  }


converterRealYenes() 

  {
        this.real = document.getElementById("realYenes").value;
        const valorEmYenes = (this.real) / this.yenes;
        const valorConvertido = valorEmYenes.toLocaleString('en-US', {style: 'currency', currency: 'JPY'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        document.getElementById("resultadoRealYenes").innerText = `${valorEmReal} é igual a ${valorConvertido}`
  }


converterDolarReal() 

  {
        this.dolar = document.getElementById("dolarReal").value;
        const valorEmReal = (this.dolar) / this.realDolar;
        const valorConvertido = valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        const valorEmDolar = parseFloat(this.dolar).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        document.getElementById("resultadoDolarReal").innerText = `${valorEmDolar} é igual a ${valorConvertido}`
  }


converterAEDReal() 

  {
        this.aed = document.getElementById("aedReal").value;
        const valorEmReal = (this.aed) / this.realAED;
        const valorConvertido = valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        const valorEmAED = parseFloat(this.aed).toLocaleString('en-US', {style: 'currency', currency: 'AED'})
        document.getElementById("resultadoAEDReal").innerText = `${valorEmAED} é igual a ${valorConvertido}`
  }


  converterYenesReal() 

  {
        this.yenes = document.getElementById("yenesReal").value;
        const valorEmReal = (this.yenes) / this.realYenes;
        const valorConvertido = valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        const valorEmYenes = parseFloat(this.yenes).toLocaleString('en-US', {style: 'currency', currency: 'JPY'})
        document.getElementById("resultadoYenesReal").innerText = `${valorEmYenes} é igual a ${valorConvertido}`
  }
}


const moeda = new Moedas();
