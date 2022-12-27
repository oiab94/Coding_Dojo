// recursive
function rFib( n ) {
	if ( n < 2 ) return n;

	return rFib( n-1 ) + rFib( n-2 );
}


	// iterative
function iFib( n ) {
		const vals = [ 0, 1 ];
		while(vals.length-1 < n) {
			let len = vals.length;
			vals.push( vals[len-1] + vals[len-2] );
		}
		return vals[n];
}


// * Calculo de tiempo
const { performance } = require ('perf_hooks');

let start = performance.now();
rFib(30);
let end = performance.now();
console.log(`Tiempo fibo recursivo: ${ end - start }`);

start = performance.now();
iFib(30);
end = performance.now();
console.log(`Tiempo fibo iterativo: ${ end - start }`);