function calcularFatorialEFibonacci() {
    const numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
      alert("Por favor, digite um número inteiro positivo válido.");
      return;
    }

    function fatorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * fatorial(num - 1);
      }
    }

    function fibonacci(num) {
      const seq = [0, 1];
      for (let i = 2; i <= num; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
      }
      return seq;
    }

    const resultadoFatorial = fatorial(numero);
    const resultadoFibonacci = fibonacci(numero);

    alert(`O fatorial de ${numero} é: ${resultadoFatorial}`);
    alert(`A sequência de Fibonacci até ${numero} é: ${resultadoFibonacci}`);
  }
  
  calcularFatorialEFibonacci();