// * Calcular números primos
Number.prototype.isPrime = 
		() => {
			for ( let i = 2; i < this; i++ )
				if ( this % i === 0 ) return false;
			return true;
			}

// * Es primo v2
Number.prototype.isPrime2 =
			() => {
				for (let i = 2; i < Math.sqrt(this); i++)
					if (this % i === 0) return false;
				return true;
			}


const { prefomance } = require('perf_hooks');
let primeCount = 0;
let num = 2;
const start = performance.now();
while (primeCount < 1e4) {
	if ( num.isPrime2() ) primeCount++;
	num++;
}
const end = performance.now();
console.log(`The 10,000th primer number is ${ num - 1 }`);
console.log(`This took ${ end - start } milliseconds to run`);
